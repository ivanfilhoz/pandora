import * as React from 'react'
import { Alert } from 'antd'

export const EmptyAlert: React.FunctionComponent = () => (
  <Alert
    type="info"
    message="Nada por aqui!"
    description="Nenhum item foi encontrado. Tente refazer a sua pesquisa ou cadastrar um novo."
  />
)
