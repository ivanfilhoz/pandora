import * as React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { Header } from '../molecules/Header'
import { Sider } from '../molecules/Sider'
import { Content } from '../atoms/Content'
import { Row, Col, Select, Skeleton, Button, message } from 'antd'
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
  UserGroup,
  GetPlaceComponent
} from '../../generated/graphql'
import { ButtonBar } from '../atoms/ButtonBar'
import { AllocationsReport } from '../organisms/AllocationsReport'
import { ErrorAlert } from '../molecules/ErrorAlert'
import { RouteComponentProps } from 'react-router'
import { route } from '../../util/routes'
import { tableToExcel } from '../../util/excel'

interface IParams {
  place?: string
}

export const Reports: React.FunctionComponent<RouteComponentProps<IParams>> = ({
  history,
  match: {
    params: { place }
  }
}) => {
  const periods: Moment[] = []
  const initial = moment('2014-12-01')
  while (initial.isSameOrBefore(moment(), 'month'))
    periods.push(initial.add(1, 'month').clone())

  const [period, setPeriod] = React.useState<Moment>(nth(-2, periods)!)

  const it = period.clone()
  const variables = {
    place: place || '',
    from: it.format('YYYY-MM-DD'),
    to: it.endOf('month').format('YYYY-MM-DD')
  }

  const handlePlace = (place: string) =>
    history.push(route('reports', { place }))

  const ref = React.useRef<HTMLDivElement>(null)

  const handleExport = () => {
    const div = ref.current
    const table = div && div.querySelector('table')
    if (table)
      tableToExcel(
        table,
        `${period.format('YYYY-MM')} - ${div!.dataset.place}.xlsx`
      )
    else message.error('Não há tabela para ser exportada.')
  }

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
                      placeholder={
                        loading ? 'Aguarde…' : 'Selecione um estabelecimento'
                      }
                      value={loading ? undefined : place}
                      loading={loading}
                      disabled={!!error}
                      onChange={handlePlace}
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
          <RightCol span={8}>
            {place && (
              <Button icon="export" onClick={handleExport}>
                Exportar para Excel
              </Button>
            )}
          </RightCol>
        </Row>
        {place && (
          <GetPlaceComponent
            variables={{
              id: place
            }}
          >
            {({
              loading: loadingPlace,
              error: errorPlace,
              data: dataPlace
            }) => (
              <ListAllocationsComponent variables={variables}>
                {({ loading, error, data }) =>
                  loading || loadingPlace ? (
                    <Skeleton />
                  ) : error || errorPlace ? (
                    <ErrorAlert />
                  ) : (
                    <AllocationsReport
                      tableRef={ref}
                      group={UserGroup.Admins}
                      place={dataPlace!.getPlace! as Place}
                      allocations={data!.listAllocations! as Allocation[]}
                    />
                  )
                }
              </ListAllocationsComponent>
            )}
          </GetPlaceComponent>
        )}
      </Content>
    </MainLayout>
  )
}
