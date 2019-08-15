import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { Row, Col, Skeleton } from 'antd'
import { RightCol } from '../atoms/RightCol'
import { MonthSelector } from '../molecules/MonthSelector'
import moment = require('moment')
import { Moment } from 'moment'
import nth from 'ramda/es/nth'
import {
  UserGroup,
  MeComponent,
  ListMyAllocationsComponent,
  MyPlace,
  MyAllocation
} from '../../generated/graphql'
import { AllocationsReport } from '../organisms/AllocationsReport'
import { ErrorAlert } from '../molecules/ErrorAlert'

export const GuestReports: React.FunctionComponent = () => {
  const periods: Moment[] = []
  const initial = moment('2014-12-01')
  while (initial.isSameOrBefore(moment(), 'month'))
    periods.push(initial.add(1, 'month').clone())

  const [period, setPeriod] = React.useState<Moment>(nth(-2, periods)!)

  const it = period.clone()
  const variables = {
    from: it.format('YYYY-MM-DD'),
    to: it.endOf('month').format('YYYY-MM-DD')
  }

  return (
    <MainLayout
      header={<Header />}
      sider={<Sider path={['reports', 'list']} />}
    >
      <Content>
        <Row style={{ marginBottom: 24 }}>
          <Col span={16}>
            <MonthSelector
              periods={periods}
              value={period}
              onChange={setPeriod}
            />
          </Col>
          <RightCol span={8} />
        </Row>
        <MeComponent>
          {({ loading: meLoading, error: meError, data: meData }) => (
            <ListMyAllocationsComponent variables={variables}>
              {({ loading, error, data }) =>
                loading || meLoading ? (
                  <Skeleton />
                ) : error || meError ? (
                  <ErrorAlert />
                ) : (
                  <AllocationsReport
                    group={meData!.me!.group}
                    place={meData!.me!.place as MyPlace}
                    allocations={data!.listMyAllocations! as MyAllocation[]}
                  />
                )
              }
            </ListMyAllocationsComponent>
          )}
        </MeComponent>
      </Content>
    </MainLayout>
  )
}
