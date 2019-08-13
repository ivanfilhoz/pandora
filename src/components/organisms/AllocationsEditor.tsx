import * as React from 'react'
import {
  Allocation,
  ListAllocationsDocument,
  Person
} from '../../generated/graphql'
import { AllocationsCalendar } from './AllocationsCalendar'
import moment = require('moment')
import { Moment } from 'moment'
import { Allocator } from './Allocator'
import { MutationUpdaterFn } from 'react-apollo'

interface IProps {
  allocations: Allocation[]
  loading: boolean
  date: Moment
  onChange: (date: Moment) => void
  onSave?: (
    date: string,
    people: string[],
    updateHandler: (variables: any) => MutationUpdaterFn
  ) => void
  readOnly?: boolean
}

export const AllocationsEditor: React.FunctionComponent<IProps> = ({
  allocations,
  date,
  onChange,
  loading,
  onSave,
  readOnly
}) => {
  const allocation = allocations.find(allocation =>
    date.isSame(allocation.date, 'day')
  )

  const getPeople = () => (allocation ? allocation.people : [])

  const handleAllocator = (people: string[]) => {
    onSave!(date.format('YYYY-MM-DD'), people, variables => proxy => {
      const data = proxy.readQuery({
        query: ListAllocationsDocument,
        variables
      }) as { listAllocations: Allocation[] }
      const listAllocations = data.listAllocations.map(allocation => {
        if (!date.isSame(allocation.date, 'day')) return allocation
        const updated = {
          ...allocation,
          people: people.map(id => {
            const person = allocation.people.find(person => person.id === id)
            return {
              __typename: 'Person',
              id,
              name: '',
              department: '',
              ...(person || {})
            }
          })
        }
        return updated
      })
      proxy.writeQuery({
        query: ListAllocationsDocument,
        variables,
        data: {
          listAllocations
        }
      })
    })
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
          onChange={onChange}
        />
      </div>
      <div style={{ flex: '1 0 300px' }}>
        <Allocator
          people={getPeople()}
          loading={loading}
          onChange={handleAllocator}
          readOnly={readOnly}
        />
      </div>
    </div>
  )
}
