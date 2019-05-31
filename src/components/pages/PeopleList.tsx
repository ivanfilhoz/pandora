import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../atoms/Header'
import { Sider } from '../atoms/Sider'
import { Content } from '../atoms/Content'
import { PersonList } from '../organisms/PersonList'
import { Row, Button, Col } from 'antd'
import Title from 'antd/lib/typography/Title'
import Search from 'antd/lib/input/Search'

export const PeopleList: React.FunctionComponent = () => (
  <MainLayout header={<Header />} sider={<Sider path={['people', 'list']} />}>
    <Content>
      <Row style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Search placeholder="Pesquisar por nome" />
        </Col>
        <Col span={16} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="primary" style={{ marginRight: 12 }}>
            Novo item
          </Button>
          <Button>Exportar</Button>
        </Col>
      </Row>
      <PersonList />
    </Content>
  </MainLayout>
)
