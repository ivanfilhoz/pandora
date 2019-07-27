import * as React from 'react'
import { ModalProps } from '../../util/modal'
import { Place } from '../../generated/graphql'
import { Modal, Form, Input } from 'antd'

interface IProps extends ModalProps {
  place?: Place
}

export const PlaceForm: React.FunctionComponent<IProps> = ({
  place,
  onOk,
  onCancel
}) => {
  const [loading, setLoading] = React.useState(false)
  const [input, setInput] = React.useState<Partial<Place>>(
    place || {
      name: '',
      headcount: 10,
      personPrice: 10000,
      leaderPrice: 12000,
      retailPrice: 20000
    }
  )

  const setField = <T extends unknown>(field: string) => (value: T) =>
    setInput({
      ...input,
      [field]: value
    })

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setField<string>(target.name)(target.value)

  const handleNumber = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setField<number>(target.name)(+target.value)

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
      title={place ? 'Editar estabelecimento' : 'Novo estabelecimento'}
      visible
      onOk={handleOk}
      okText={place ? 'Salvar alterações' : 'Criar estabelecimento'}
      confirmLoading={loading}
      onCancel={onCancel}
      cancelText="Cancelar"
    >
      <Form {...formItemLayout}>
        <Form.Item label="Nome">
          <Input name="name" value={input.name || ''} onChange={handleInput} />
        </Form.Item>
        <Form.Item label="Efetivo diário">
          <Input
            type="number"
            name="headcount"
            value={input.headcount || 0}
            onChange={handleNumber}
            min={0}
            step={1}
          />
        </Form.Item>
        <Form.Item label="Diária do segurança (R$)">
          <Input
            type="number"
            name="personPrice"
            value={input.personPrice || 0}
            onChange={handleNumber}
            min={0}
            step={1}
          />
        </Form.Item>
        <Form.Item label="Diária do líder (R$)">
          <Input
            type="number"
            name="leaderPrice"
            value={input.leaderPrice || 0}
            onChange={handleNumber}
            min={0}
            step={1}
          />
        </Form.Item>
        <Form.Item label="Diária de revenda (R$)">
          <Input
            type="number"
            name="retailPrice"
            value={input.retailPrice || 0}
            onChange={handleNumber}
            min={0}
            step={1}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}
