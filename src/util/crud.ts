import { MutationFn } from 'react-apollo'
import { toInput } from './transform'
import { message, Modal } from 'antd'

type CrudHook<T> = {
  handleCreate: (mutation: MutationFn) => () => void
  handleUpdate: (mutation: MutationFn, entity: T) => () => void
  handleDelete: (mutation: MutationFn, entity: T) => () => void
}

type ModalArgs = {
  [key: string]: any
  onOk: (...args: any[]) => any
}

type Entity = {
  [key: string]: any
  __typename?: any
  id: string
  name: string
}

interface IAttributes {
  entityName: string
  entityArticle: string
  editModal: (args: ModalArgs) => void
  refetch: string
}

export const generateCRUD = <T extends Entity>({
  entityName,
  entityArticle: x,
  editModal,
  refetch
}: IAttributes): CrudHook<T> => {
  const handleCreate = (mutation: MutationFn) => () =>
    editModal({
      onOk: async (input: Partial<T>) => {
        try {
          await mutation({
            variables: { input: toInput(input) },
            refetchQueries: [refetch]
          })
          message.success(`${entityName} criad${x} com sucesso!`)
        } catch (err) {
          message.error(
            `Oops! Há algo errado com os dados d${x} ${entityName.toLowerCase()}.`
          )
          throw err
        }
      }
    })

  const handleUpdate = (mutation: MutationFn, entity: T) => () =>
    editModal({
      entity,
      onOk: async (input: Partial<T>) => {
        try {
          await mutation({
            variables: { input: toInput(input) },
            refetchQueries: [refetch]
          })
          message.success(`${entityName} editad${x} com sucesso!`)
        } catch (err) {
          message.error(
            `Oops! Há algo errado com os dados d${x} ${entityName.toLowerCase()}.`
          )
          throw err
        }
      }
    })

  const handleDelete = (mutation: MutationFn, entity: T) => () =>
    Modal.confirm({
      title: 'Esta ação é irreversível!',
      content: `Tem certeza que deseja excluir ${x} ${entityName.toLowerCase()} "${
        entity.name
      }"?`,
      okText: 'Sim, desejo excluir',
      cancelText: 'Não, retornar à lista',
      onOk: async () => {
        try {
          await mutation({
            variables: { input: { id: entity.id } },
            refetchQueries: [refetch]
          })
          message.success(
            `${x.toUpperCase()} ${entityName.toLowerCase()} foi excluído com sucesso!`
          )
        } catch (err) {
          message.error(
            `Oops! Não foi possível excluir ${x} ${entityName.toLowerCase()}.`
          )
        }
      }
    })

  return { handleCreate, handleUpdate, handleDelete }
}
