import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../atoms/Header'
import { Sider } from '../atoms/Sider'
import { Content } from '../atoms/Content'
import { Allocator } from '../molecules/Allocator'

export const PeopleAllocation: React.FunctionComponent = () => (
  <MainLayout
    header={<Header />}
    sider={<Sider path={['people', 'allocation']} />}
  >
    <Content>
      <Allocator />
    </Content>
  </MainLayout>
)
