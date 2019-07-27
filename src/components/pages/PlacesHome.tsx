import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../atoms/Header'
import { Sider } from '../atoms/Sider'
import { Content } from '../atoms/Content'
import { ListPlacesComponent } from '../../generated/graphql'
import { Skeleton, Row, Col, Card, Avatar, Button, Icon } from 'antd'
import { ErrorAlert } from '../atoms/ErrorAlert'
import Meta from 'antd/lib/card/Meta'
import Search from 'antd/lib/input/Search'
import { RightCol } from '../atoms/RightCol'

export const PlacesHome: React.FunctionComponent = () => (
  <MainLayout header={<Header />} sider={<Sider path={['places', 'list']} />}>
    <Content>
      <Row style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Search placeholder="Pesquisar por nome" />
        </Col>
        <RightCol span={16}>
          <Button type="primary" style={{ marginRight: 12 }}>
            Novo estabelecimento
          </Button>
          <Button>Exportar</Button>
        </RightCol>
      </Row>
      <ListPlacesComponent>
        {({ loading, error, data }) =>
          loading ? (
            <Skeleton />
          ) : error ? (
            <ErrorAlert />
          ) : (
            <div
              style={{
                flex: '1 0 300px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'min-content',
                gridGap: 12,
                height: 'auto'
              }}
            >
              {data!.listPlaces!.items!.map(place => (
                <Card
                  key={place!.id}
                  hoverable
                  actions={[
                    <Icon type="calendar" />,
                    <Icon type="edit" />,
                    <Icon type="link" />,
                    <Icon type="delete" />
                  ]}
                >
                  <Meta
                    avatar={<Avatar alt="Sem foto" icon="shop" />}
                    title={place!.name}
                    description={place!.headcount + ' seguranças'}
                  />
                </Card>
              ))}
            </div>
          )
        }
      </ListPlacesComponent>
    </Content>
  </MainLayout>
)
