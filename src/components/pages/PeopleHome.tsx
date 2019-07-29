import * as React from 'react'
import {
  ListPeopleComponent,
  Person,
  CreatePersonComponent,
  UpdatePersonComponent,
  DeletePersonComponent
} from '../../generated/graphql'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { PeopleList } from '../organisms/PeopleList'
import { Row, Button, Col } from 'antd'
import Search from 'antd/lib/input/Search'
import { RightCol } from '../atoms/RightCol'
import { ErrorAlert } from '../molecules/ErrorAlert'
import { useModal } from '../../util/modal'
import { PersonForm } from '../organisms/PersonForm'
import { generateCRUD } from '../../util/crud'
import { PeopleSkeleton } from '../organisms/PeopleSkeleton'
import { searchBy } from '../../util/filter'
import { ButtonBar } from '../atoms/ButtonBar'

export const PeopleHome: React.FunctionComponent = () => {
  const [search, setSearch] = React.useState('')
  const searchByName = searchBy('name')(search)

  const [EditModal, showEditModal] = useModal(PersonForm)
  const { create, update, remove } = generateCRUD<Person>({
    entityName: 'Pessoa',
    entityArticle: 'a',
    editModal: showEditModal,
    refetch: 'listPeople'
  })

  return (
    <MainLayout header={<Header />} sider={<Sider path={['people', 'list']} />}>
      <Content>
        <Row style={{ marginBottom: 24 }}>
          <Col span={8}>
            <Search placeholder="Pesquisar por nome" onSearch={setSearch} />
          </Col>
          <RightCol span={16}>
            <ButtonBar
              buttons={[
                <CreatePersonComponent>
                  {createPerson => (
                    <Button type="primary" onClick={() => create(createPerson)}>
                      Cadastrar pessoa
                    </Button>
                  )}
                </CreatePersonComponent>,
                <Button disabled>Exportar</Button>
              ]}
            />
          </RightCol>
        </Row>
        <ListPeopleComponent>
          {({ loading, error, data }) =>
            loading ? (
              <PeopleSkeleton />
            ) : error ? (
              <ErrorAlert />
            ) : (
              <UpdatePersonComponent>
                {updatePerson => (
                  <DeletePersonComponent>
                    {deletePerson => (
                      <PeopleList
                        people={searchByName(data!.listPeople!
                          .items as Person[])}
                        onEdit={person => update(updatePerson, person!)}
                        onDelete={person => remove(deletePerson, person!)}
                      />
                    )}
                  </DeletePersonComponent>
                )}
              </UpdatePersonComponent>
            )
          }
        </ListPeopleComponent>
      </Content>
      <EditModal />
    </MainLayout>
  )
}
