import * as React from 'react'
import { Breadcrumb as RawBreadcrumb } from 'antd'
const { Item } = RawBreadcrumb

export const Breadcrumb: React.FunctionComponent = ({ children }) => (
  <RawBreadcrumb style={{ margin: '16px 0' }}>
    <Item>Pessoal</Item>
    <Item>Alocação</Item>
  </RawBreadcrumb>
)
