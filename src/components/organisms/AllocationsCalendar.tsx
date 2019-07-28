import * as React from 'react'
import { Allocation } from '../../generated/graphql'
import { Spin, Calendar, Icon } from 'antd'
import { Moment } from 'moment'
import map from 'ramda/es/map'
import objOf from 'ramda/es/objOf'

interface IProps {
  allocations: Allocation[]
  loading: boolean
  value: Moment
  onChange: (value: Moment) => void
}

export const AllocationsCalendar: React.FunctionComponent<IProps> = ({
  allocations,
  loading,
  value,
  onChange
}) => {
  const data = (map(({ date }) => objOf(date), allocations) as any) as {
    [key: string]: Allocation
  }
  const get = (date: Moment) => data[date.format('YYYY-MM-DD')]

  const AllocationIndicator = ({ date }: { date: Moment }) => {
    const allocation = get(date)
    const headcount = allocation ? allocation.people.length : 0

    if (headcount === 10) {
      return <Icon type="check-circle" theme="twoTone" twoToneColor="green" />
    } else if (headcount < 5) {
      return (
        <Icon type="exclamation-circle" theme="twoTone" twoToneColor="red" />
      )
    } else {
      return <Icon type="minus-circle" theme="twoTone" twoToneColor="yellow" />
    }
  }

  return (
    <Spin spinning={loading}>
      <Calendar
        fullscreen={false}
        value={value}
        onChange={onChange}
        dateCellRender={date =>
          date.isSame(value, 'month') && <AllocationIndicator date={date} />
        }
      />
    </Spin>
  )
}
