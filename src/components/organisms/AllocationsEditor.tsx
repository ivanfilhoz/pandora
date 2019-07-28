import * as React from 'react'
import { Allocation } from '../../generated/graphql'
import { AllocationsCalendar } from './AllocationsCalendar'
import moment = require('moment')
import { Moment } from 'moment'
import { Allocator } from './Allocator'

interface IProps {
  allocations: Allocation[]
  loading: boolean
  onSave: (date: string, people: string[]) => void
}

export const AllocationsEditor: React.FunctionComponent<IProps> = ({
  allocations,
  loading
}) => {
  const [date, setDate] = React.useState<Moment>(moment())

  const getPeople = () => {
    const allocation = allocations.find(allocation =>
      date.isSame(allocation.date, 'day')
    )
    return allocation ? allocation.people : []
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: '-12px'
      }}
    >
      <div
        style={{
          flex: '0 0 300px',
          padding: '12px'
        }}
      >
        <AllocationsCalendar
          allocations={allocations as Allocation[]}
          loading={loading}
          value={date}
          onChange={setDate}
        />
      </div>
      <div style={{ flex: '1 0 300px' }}>
        <Allocator people={getPeople()} loading={loading} />
      </div>
    </div>
  )
}
