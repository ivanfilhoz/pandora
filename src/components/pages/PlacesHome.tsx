import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { Skeleton, Row, Col, Card, Button, Icon, Input } from 'antd'
import { ErrorAlert } from '../atoms/ErrorAlert'
import { RightCol } from '../atoms/RightCol'
import { useModal } from '../../util/modal'
import { PlaceForm } from '../organisms/PlaceForm'
import {
  ListPlacesComponent,
  DeletePlaceComponent,
  UpdatePlaceComponent,
  CreatePlaceComponent,
  Place
} from '../../generated/graphql'
import { generateCRUD } from '../../util/crud'
import { EmptyAlert } from '../atoms/EmptyAlert'
import { numbers } from '../../util/misc'
import { CardGrid } from '../atoms/CardGrid'
import { PlaceList } from '../organisms/PlaceList'

export const PlacesHome: React.FunctionComponent = () => {
  const [filter, setFilter] = React.useState('')
  const applyFilter = () =>
    filter
      ? {
          filter: {
            name: {
              contains: filter
            }
          }
        }
      : undefined

  const [EditModal, showEditModal] = useModal(PlaceForm)
  const { create, update, remove } = generateCRUD<Place>({
    entityName: 'Estabelecimento',
    entityArticle: 'o',
    editModal: showEditModal,
    refetch: 'listPlaces'
  })

  return (
    <MainLayout header={<Header />} sider={<Sider path={['places', 'list']} />}>
      <Content>
        <Row style={{ marginBottom: 24 }}>
          <Col span={8}>
            <Input.Search
              placeholder="Pesquisar por nome"
              onSearch={setFilter}
            />
          </Col>
          <RightCol span={16}>
            <CreatePlaceComponent>
              {createPlace => (
                <Button
                  type="primary"
                  style={{ marginRight: 12 }}
                  onClick={() => create(createPlace)}
                >
                  Novo estabelecimento
                </Button>
              )}
            </CreatePlaceComponent>
            <Button disabled>Exportar</Button>
          </RightCol>
        </Row>
        <ListPlacesComponent
          variables={applyFilter()}
          notifyOnNetworkStatusChange
        >
          {({ loading, error, data }) =>
            loading ? (
              <CardGrid>
                {numbers(6).map(i => (
                  <Card
                    key={i}
                    actions={[<Icon style={{ visibility: 'hidden' }} />]}
                  >
                    <Skeleton avatar paragraph={false} />
                  </Card>
                ))}
              </CardGrid>
            ) : error ? (
              <ErrorAlert />
            ) : !data!.listPlaces!.items!.length ? (
              <EmptyAlert />
            ) : (
              <UpdatePlaceComponent>
                {updatePlace => (
                  <DeletePlaceComponent>
                    {deletePlace => (
                      <PlaceList
                        places={data!.listPlaces!.items! as Place[]}
                        onEdit={place => update(updatePlace, place!)}
                        onDelete={place => remove(deletePlace, place!)}
                      />
                    )}
                  </DeletePlaceComponent>
                )}
              </UpdatePlaceComponent>
            )
          }
        </ListPlacesComponent>
      </Content>
      <EditModal />
    </MainLayout>
  )
}
