import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { PageHeader, Skeleton, notification, Spin } from 'antd'
import { RouteComponentProps } from 'react-router'
import { route } from '../../util/routes'
import { GetPlaceComponent } from '../../generated/graphql'
import { Allocator } from '../molecules/Allocator'

interface IParams {
  id: string
}

export const PlaceAllocation: React.FunctionComponent<
  RouteComponentProps<IParams>
> = ({
  match: {
    params: { id }
  },
  history
}) => {
  const handleBack = () => {
    history.push(route('places'))
    return
  }
  const handleError = () => {
    notification.error({
      message: 'Oops! :(',
      description: 'Este estabelecimento não existe mais.'
    })
    handleBack()
  }

  return (
    <MainLayout header={<Header />} sider={<Sider path={['places', 'list']} />}>
      <Content>
        <GetPlaceComponent onError={handleError} variables={{ id }}>
          {({ loading, data }) =>
            loading ? (
              <Skeleton />
            ) : !data!.getPlace! ? (
              <>{handleError()}</>
            ) : (
              <>
                <PageHeader
                  title={data!.getPlace!.name}
                  onBack={handleBack}
                  style={{ padding: 0, marginBottom: 24 }}
                />
                <Allocator />
              </>
            )
          }
        </GetPlaceComponent>
      </Content>
    </MainLayout>
  )
}
