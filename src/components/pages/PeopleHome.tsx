import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../atoms/Header'
import { Sider } from '../atoms/Sider'
import { Content } from '../atoms/Content'
import { PersonList } from '../organisms/PersonList'
import { Row, Button, Col } from 'antd'
import Search from 'antd/lib/input/Search'
import { RightCol } from '../atoms/RightCol'

export const PeopleHome: React.FunctionComponent = () => (
  <MainLayout header={<Header />} sider={<Sider path={['people', 'list']} />}>
    <Content>
      <Row style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Search placeholder="Pesquisar por nome" />
        </Col>
        <RightCol span={16}>
          <Button type="primary" style={{ marginRight: 12 }}>
            Novo item
          </Button>
          <Button>Exportar</Button>
        </RightCol>
      </Row>
      <PersonList />
    </Content>
  </MainLayout>
)
