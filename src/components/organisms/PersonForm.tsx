import * as React from 'react'
import { Person } from '../../generated/graphql'
import { Modal, Form, Input } from 'antd'
import { CrudModal } from '../../util/crud'
import { InnerForm } from '../atoms/InnerForm'

interface IProps extends CrudModal<Person> {
  entity?: Person
}

export const PersonForm: React.FunctionComponent<IProps> = ({
  entity,
  onOk,
  onCancel
}) => {
  const [loading, setLoading] = React.useState(false)
  const [input, setInput] = React.useState<Partial<Person>>(
    entity || {
      name: '',
      department: ''
    }
  )

  const setField = <T extends unknown>(field: string) => (value: T) =>
    setInput({
      ...input,
      [field]: value
    })

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setField<string>(target.name)(target.value)

  const handleOk = async () => {
    setLoading(true)
    try {
      await onOk(input)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <Modal
      title={entity ? 'Editar pessoa' : 'Cadastrar pessoa'}
      visible
      onOk={handleOk}
      okText={entity ? 'Salvar alterações' : 'Cadastrar pessoa'}
      confirmLoading={loading}
      onCancel={onCancel}
      cancelText="Cancelar"
    >
      <InnerForm onOk={handleOk}>
        <Form.Item label="Nome de guerra">
          <Input name="name" value={input.name || ''} onChange={handleInput} />
        </Form.Item>
        <Form.Item label="BP / Cia">
          <Input
            name="department"
            value={input.department || ''}
            onChange={handleInput}
          />
        </Form.Item>
      </InnerForm>
    </Modal>
  )
}
