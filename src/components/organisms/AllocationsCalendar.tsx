import * as React from 'react'
import { Allocation } from '../../generated/graphql'
import { Spin, Calendar, Icon } from 'antd'
import { Moment } from 'moment'

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
  const AllocationIndicator = ({ date }: { date: Moment }) => {
    const allocation = allocations.find(allocation =>
      date.isSame(allocation.date, 'day')
    )
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
