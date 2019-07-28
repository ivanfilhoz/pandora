import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { PageHeader, Skeleton, notification, message } from 'antd'
import { RouteComponentProps } from 'react-router'
import { route } from '../../util/routes'
import {
  GetPlaceComponent,
  ListAllocationsComponent,
  Allocation,
  SetAllocationComponent
} from '../../generated/graphql'
import moment = require('moment')
import { AllocationsEditor } from '../organisms/AllocationsEditor'
import { MutationFn } from 'react-apollo'

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
  const today = moment()

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

  const save = async (mutation: MutationFn, date: string, people: string[]) => {
    try {
      await mutation({
        variables: { place: id, date, people },
        refetchQueries: ['listMutations']
      })
      message.success('Alocação salva com sucesso!')
    } catch (err) {
      message.error('Oops! Ocorreu um erro ao salvar esta alocação.')
      throw err
    }
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
                <SetAllocationComponent>
                  {setAllocation => (
                    <ListAllocationsComponent
                      variables={{
                        place: id,
                        from: today.startOf('month').format('YYYY-MM-DD'),
                        to: today.endOf('month').format('YYYY-MM-DD')
                      }}
                    >
                      {({
                        loading: allocationsLoading,
                        data: allocationsData
                      }) =>
                        allocationsLoading ? (
                          <Skeleton />
                        ) : (
                          <AllocationsEditor
                            allocations={
                              allocationsData!.listAllocations as Allocation[]
                            }
                            loading={allocationsLoading}
                            onSave={(date: string, people: string[]) =>
                              save(setAllocation, date, people)
                            }
                          />
                        )
                      }
                    </ListAllocationsComponent>
                  )}
                </SetAllocationComponent>
              </>
            )
          }
        </GetPlaceComponent>
      </Content>
    </MainLayout>
  )
}
