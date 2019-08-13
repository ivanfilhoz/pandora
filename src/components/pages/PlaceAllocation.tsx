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
import { Moment } from 'moment'
import { AllocationsEditor } from '../organisms/AllocationsEditor'
import { MutationFn, MutationUpdaterFn } from 'react-apollo'

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
  const [date, setDate] = React.useState<Moment>(moment())
  const it = date.clone()
  const variables = {
    place: id,
    from: it.startOf('month').format('YYYY-MM-DD'),
    to: it.endOf('month').format('YYYY-MM-DD')
  }

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

  const handleSave = (mutation: MutationFn) => async (
    date: string,
    people: string[],
    updateHandler?: (variables: any) => MutationUpdaterFn
  ) => {
    try {
      await mutation({
        variables: { input: { place: id, date, people } },
        refetchQueries: ['listAllocations'],
        update: updateHandler ? updateHandler(variables) : undefined
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
                    <ListAllocationsComponent variables={variables}>
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
                            date={date}
                            onChange={setDate}
                            onSave={handleSave(setAllocation)}
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
