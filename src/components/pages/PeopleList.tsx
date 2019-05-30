import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../atoms/Header'
import { Sider } from '../atoms/Sider'
import { Content } from '../atoms/Content'

export const PeopleList: React.FunctionComponent = () => (
  <MainLayout header={<Header />} sider={<Sider path={['people', 'list']} />}>
    <Content>Em construção</Content>
  </MainLayout>
)
