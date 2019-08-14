import * as React from 'react'
import { Skeleton, message, Button, Modal, Divider, Col, Row } from 'antd'
import {
  ListUsersComponent,
  User,
  DeleteUserComponent,
  CreateUserComponent,
  UserOutput,
  Place
} from '../../generated/graphql'
import { MutationFn } from 'react-apollo'
import { UsersList } from './UsersList'
import { useModal } from '../../util/modal'
import { UserForm } from './UserForm'
import { toInput } from '../../util/transform'
import { ButtonBar } from '../atoms/ButtonBar'
import { RightCol } from '../atoms/RightCol'
import Title from 'antd/lib/typography/Title'

interface IProps {
  place: Place
}

export const UsersEditor: React.FunctionComponent<IProps> = ({ place }) => {
  const [EditModal, showEditModal] = useModal(UserForm)

  const handleCreate = (mutation: MutationFn) => () =>
    showEditModal({
      onOk: async (input: Partial<User>) => {
        try {
          const { data } = (await mutation({
            variables: {
              input: {
                ...toInput(input),
                place: place.id
              }
            },
            refetchQueries: ['listUsers']
          })) as { data: { createUser: UserOutput } }
          Modal.success({
            title: 'Conta criada com sucesso!',
            content: (
              <>
                <Divider />
                <p>Uma senha temporária foi gerada:</p>
                <code style={{ fontSize: 32 }}>{data.createUser.password}</code>
                <Divider />
                <p>
                  O usuário poderá alterar esta senha na primeira vez que fizer
                  login.
                </p>
              </>
            ),
            okText: 'Certo!'
          })
        } catch (err) {
          message.error(`Oops! Há algo errado com os dados do usuário.`)
          throw err
        }
      }
    })

  const handleDelete = (mutation: MutationFn) => async (user: User) =>
    Modal.confirm({
      title: 'Esta ação é irreversível!',
      content: `Tem certeza que deseja excluir o usuário "${user.username}"?`,
      okText: 'Sim, desejo excluir',
      cancelText: 'Não, retornar à lista',
      onOk: async () => {
        try {
          await mutation({
            variables: { username: user.username },
            refetchQueries: ['listUsers']
          })
          message.success('O usuário foi excluído com sucesso!')
        } catch (err) {
          message.error('Oops! Não foi possível excluir o usuário.')
        }
      }
    })

  return (
    <>
      <Row style={{ marginBottom: 24 }}>
        <Col span={16}>
          <Title level={4}>Contas de acesso</Title>
        </Col>
        <RightCol span={8}>
          <ButtonBar
            buttons={[
              <CreateUserComponent>
                {createUser => (
                  <Button type="primary" onClick={handleCreate(createUser)}>
                    Novo usuário
                  </Button>
                )}
              </CreateUserComponent>
            ]}
          />
        </RightCol>
      </Row>
      <ListUsersComponent
        variables={{
          place: place.id
        }}
      >
        {({ loading: usersLoading, data: usersData }) =>
          usersLoading ? (
            <Skeleton />
          ) : (
            <DeleteUserComponent>
              {deleteUser => (
                <UsersList
                  users={usersData!.listUsers as User[]}
                  onDelete={handleDelete(deleteUser)}
                />
              )}
            </DeleteUserComponent>
          )
        }
      </ListUsersComponent>

      <EditModal />
    </>
  )
}
