import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { Skeleton, Row, Col, Card, Button, Icon, Input } from 'antd'
import { ErrorAlert } from '../molecules/ErrorAlert'
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
import { EmptyAlert } from '../molecules/EmptyAlert'
import { CardGrid } from '../atoms/CardGrid'
import { PlacesList } from '../organisms/PlacesList'
import times from 'ramda/es/times'
import identity from 'ramda/es/identity'
import { RouteComponentProps } from 'react-router'
import { route } from '../../util/routes'

export const PlacesHome: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {
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
                {times(identity, 6).map(i => (
                  <Card
                    key={i}
                    actions={[
                      <Icon type="shop" style={{ visibility: 'hidden' }} />
                    ]}
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
                      <PlacesList
                        places={data!.listPlaces!.items! as Place[]}
                        onOpen={place =>
                          history.push(
                            route('place-allocation', { id: place.id })
                          )
                        }
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
