import * as React from 'react'
import {
  ListPlacesComponent,
  DeletePlaceComponent,
  UpdatePlaceComponent,
  CreatePlaceComponent,
  Place
} from '../../generated/graphql'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { Row, Col, Button, Input } from 'antd'
import { ErrorAlert } from '../molecules/ErrorAlert'
import { RightCol } from '../atoms/RightCol'
import { useModal } from '../../util/modal'
import { PlaceForm } from '../organisms/PlaceForm'
import { generateCRUD } from '../../util/crud'
import { EmptyAlert } from '../molecules/EmptyAlert'
import { PlacesList } from '../organisms/PlacesList'
import { RouteComponentProps } from 'react-router'
import { route } from '../../util/routes'
import { PlacesSkeleton } from '../organisms/PlacesSkeleton'
import { searchBy } from '../../util/filter'
import { ButtonBar } from '../atoms/ButtonBar'

export const PlacesHome: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {
  const [search, setSearch] = React.useState('')
  const searchByName = searchBy('name')(search)

  const [EditModal, showEditModal] = useModal(PlaceForm)
  const { create, update, remove } = generateCRUD<Place>({
    entityName: 'Estabelecimento',
    entityArticle: 'o',
    editModal: showEditModal,
    refetch: 'listPlaces'
  })

  const open = (place: Place) => {
    history.push(route('place-allocation', { id: place.id }))
  }

  return (
    <MainLayout header={<Header />} sider={<Sider path={['places', 'list']} />}>
      <Content>
        <Row style={{ marginBottom: 24 }}>
          <Col span={8}>
            <Input.Search
              placeholder="Pesquisar por nome"
              onSearch={setSearch}
            />
          </Col>
          <RightCol span={16}>
            <ButtonBar
              buttons={[
                <CreatePlaceComponent>
                  {createPlace => (
                    <Button type="primary" onClick={() => create(createPlace)}>
                      Novo estabelecimento
                    </Button>
                  )}
                </CreatePlaceComponent>,
                <Button disabled>Exportar</Button>
              ]}
            />
          </RightCol>
        </Row>
        <ListPlacesComponent>
          {({ loading, error, data }) => {
            if (loading) return <PlacesSkeleton />
            if (error) return <ErrorAlert />

            const places = searchByName(data!.listPlaces!.items as Place[])
            if (!places.length) return <EmptyAlert />

            return (
              <UpdatePlaceComponent>
                {updatePlace => (
                  <DeletePlaceComponent>
                    {deletePlace => (
                      <PlacesList
                        places={places}
                        onOpen={open}
                        onEdit={place => update(updatePlace, place!)}
                        onDelete={place => remove(deletePlace, place!)}
                      />
                    )}
                  </DeletePlaceComponent>
                )}
              </UpdatePlaceComponent>
            )
          }}
        </ListPlacesComponent>
      </Content>
      <EditModal />
    </MainLayout>
  )
}
