import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { Skeleton, Row, Col, Card, Avatar, Button, Icon } from 'antd'
import { ErrorAlert } from '../atoms/ErrorAlert'
import Meta from 'antd/lib/card/Meta'
import Search from 'antd/lib/input/Search'
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

export const PlacesHome: React.FunctionComponent = () => {
  const [EditModal, showEditModal] = useModal(PlaceForm)
  const { handleCreate, handleUpdate, handleDelete } = generateCRUD<Place>({
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
            <Search placeholder="Pesquisar por nome" />
          </Col>
          <RightCol span={16}>
            <CreatePlaceComponent>
              {createPlace => (
                <Button
                  type="primary"
                  style={{ marginRight: 12 }}
                  onClick={handleCreate(createPlace)}
                >
                  Novo estabelecimento
                </Button>
              )}
            </CreatePlaceComponent>
            <Button disabled>Exportar</Button>
          </RightCol>
        </Row>
        <ListPlacesComponent notifyOnNetworkStatusChange>
          {({ loading, error, data }) =>
            loading ? (
              <Skeleton />
            ) : error ? (
              <ErrorAlert />
            ) : (
              <div
                style={{
                  flex: '1 0 300px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'min-content',
                  gridGap: 12,
                  height: 'auto'
                }}
              >
                {data!.listPlaces!.items!.map(place => (
                  <Card
                    key={place!.id}
                    hoverable
                    actions={[
                      <Icon type="calendar" title="Alocação" />,
                      <UpdatePlaceComponent>
                        {updatePlace => (
                          <Icon
                            type="edit"
                            title="Editar"
                            onClick={handleUpdate(updatePlace, place!)}
                          />
                        )}
                      </UpdatePlaceComponent>,
                      <Icon type="link" />,
                      <DeletePlaceComponent>
                        {deletePlace => (
                          <Icon
                            type="delete"
                            title="Excluir"
                            onClick={handleDelete(deletePlace, place!)}
                          />
                        )}
                      </DeletePlaceComponent>
                    ]}
                  >
                    <Meta
                      avatar={<Avatar alt="Sem foto" icon="shop" />}
                      title={place!.name}
                      description={place!.headcount + ' seguranças'}
                    />
                  </Card>
                ))}
              </div>
            )
          }
        </ListPlacesComponent>
      </Content>
      <EditModal />
    </MainLayout>
  )
}
