import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { Row, Col, Select, Skeleton } from 'antd'
import { RightCol } from '../atoms/RightCol'
import { MonthSelector } from '../molecules/MonthSelector'
import moment = require('moment')
import { Moment } from 'moment'
import nth from 'ramda/es/nth'
import {
  ListPlacesComponent,
  Place,
  ListAllocationsComponent,
  Allocation,
  UserGroup
} from '../../generated/graphql'
import { ButtonBar } from '../atoms/ButtonBar'
import { EmptyAlert } from '../molecules/EmptyAlert'
import { AllocationsReport } from '../organisms/AllocationsReport'
import { ErrorAlert } from '../molecules/ErrorAlert'

export const Reports: React.FunctionComponent = () => {
  const periods: Moment[] = []
  const initial = moment('2014-12-01')
  while (initial.isSameOrBefore(moment(), 'month'))
    periods.push(initial.add(1, 'month').clone())

  const [period, setPeriod] = React.useState<Moment>(nth(-2, periods)!)
  const [place, setPlace] = React.useState<Place | undefined>(undefined)

  const it = period.clone()
  const variables = {
    place: place ? place.id : '',
    from: it.format('YYYY-MM-DD'),
    to: it.endOf('month').format('YYYY-MM-DD')
  }

  const handlePlace = (places: Place[]) => (id: string) =>
    setPlace(places.find(_ => _.id === id))

  return (
    <MainLayout
      header={<Header />}
      sider={<Sider path={['reports', 'list']} />}
    >
      <Content>
        <Row style={{ marginBottom: 24 }}>
          <Col span={16}>
            <ButtonBar
              buttons={[
                <ListPlacesComponent>
                  {({ loading, error, data }) => (
                    <Select
                      showSearch
                      placeholder="Selecione um estabelecimento"
                      value={place ? place.id : undefined}
                      loading={loading}
                      disabled={!!error}
                      onChange={handlePlace(
                        data!.listPlaces! &&
                          (data!.listPlaces!.items! as Place[])
                      )}
                      style={{ width: 250 }}
                    >
                      {!loading &&
                        !error &&
                        data!.listPlaces!.items!.map(place => (
                          <Select.Option key={place!.id} value={place!.id}>
                            {place!.name}
                          </Select.Option>
                        ))}
                    </Select>
                  )}
                </ListPlacesComponent>,
                <MonthSelector
                  periods={periods}
                  value={period}
                  onChange={setPeriod}
                />
              ]}
            />
          </Col>
          <RightCol span={8} />
        </Row>
        {place ? (
          <ListAllocationsComponent variables={variables}>
            {({ loading, error, data }) =>
              loading ? (
                <Skeleton />
              ) : error ? (
                <ErrorAlert />
              ) : (
                <AllocationsReport
                  group={UserGroup.Admins}
                  place={place}
                  allocations={data!.listAllocations! as Allocation[]}
                />
              )
            }
          </ListAllocationsComponent>
        ) : (
          <EmptyAlert />
        )}
      </Content>
    </MainLayout>
  )
}
