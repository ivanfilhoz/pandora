import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { PersonList } from '../organisms/PersonList'
import { Row, Button, Col, Skeleton, List } from 'antd'
import Search from 'antd/lib/input/Search'
import { RightCol } from '../atoms/RightCol'
import {
  ListPeopleComponent,
  Person,
  CreatePersonComponent,
  UpdatePersonComponent,
  DeletePersonComponent
} from '../../generated/graphql'
import { ErrorAlert } from '../atoms/ErrorAlert'
import { useModal } from '../../util/modal'
import { PersonForm } from '../organisms/PersonForm'
import { generateCRUD } from '../../util/crud'
import { numbers } from '../../util/misc'

export const PeopleHome: React.FunctionComponent = () => {
  const [EditModal, showEditModal] = useModal(PersonForm)
  const { handleCreate, handleUpdate, handleDelete } = generateCRUD<Person>({
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
            <Search placeholder="Pesquisar por nome" />
          </Col>
          <RightCol span={16}>
            <CreatePersonComponent>
              {createPerson => (
                <Button
                  type="primary"
                  style={{ marginRight: 12 }}
                  onClick={handleCreate(createPerson)}
                >
                  Cadastrar pessoa
                </Button>
              )}
            </CreatePersonComponent>
            <Button disabled>Exportar</Button>
          </RightCol>
        </Row>
        <ListPeopleComponent>
          {({ loading, error, data }) =>
            loading ? (
              <List>
                {numbers(5).map(i => (
                  <List.Item key={i}>
                    <Skeleton avatar paragraph={false} />
                  </List.Item>
                ))}
              </List>
            ) : error ? (
              <ErrorAlert />
            ) : (
              <UpdatePersonComponent>
                {updatePerson => (
                  <DeletePersonComponent>
                    {deletePerson => (
                      <PersonList
                        people={data!.listPeople!.items! as Person[]}
                        onEdit={person => handleUpdate(updatePerson, person!)()}
                        onDelete={person =>
                          handleDelete(deletePerson, person!)()
                        }
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
