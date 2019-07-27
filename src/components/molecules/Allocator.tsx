import * as React from 'react'
import { Calendar, Icon, Card, Avatar } from 'antd'
import { Moment } from 'moment'
import moment = require('moment')
import faker = require('faker/locale/pt_BR')
import Meta from 'antd/lib/card/Meta'

export const Allocator: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(moment())

  const AllocationIndicator = ({ date }: { date: Moment }) => {
    const day = data.filter(allocation => allocation.date.isSame(date, 'day'))

    if (day.length === 10) {
      return <Icon type="check-circle" theme="twoTone" twoToneColor="green" />
    } else if (day.length < 5) {
      return (
        <Icon type="exclamation-circle" theme="twoTone" twoToneColor="red" />
      )
    } else {
      return <Icon type="minus-circle" theme="twoTone" twoToneColor="yellow" />
    }
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
        <Calendar
          fullscreen={false}
          value={value}
          onChange={date => setValue(date || moment())}
          dateCellRender={date =>
            date.isSame(value, 'month') && <AllocationIndicator date={date} />
          }
        />
      </div>
      <div
        style={{
          flex: '1 0 300px',
          padding: 12,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'min-content',
          gridGap: 12,
          height: 'auto'
        }}
      >
        {data
          .filter(allocation => allocation.date.isSame(value, 'day'))
          .map(person => (
            <Card key={person.name} hoverable>
              <Meta
                avatar={
                  <Avatar
                    alt="Sem foto"
                    src={require('../../../assets/photo.jpg')}
                  />
                }
                title={person.name}
                description={person.phone}
              />
            </Card>
          ))}
        <Card
          hoverable
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Meta description="Selecionar..." />
        </Card>
      </div>
    </div>
  )
}

type Allocation = {
  date: Moment
  name: string
  phone: string
}

const generate = (date: Moment) =>
  ({
    date: date.clone(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber()
  } as Allocation)

const mock = () => {
  let data: Allocation[] = []

  const date = moment().startOf('month')
  const endOfMonth = moment().endOf('month')

  while (!date.isAfter(endOfMonth, 'day')) {
    const full = !!Math.round(Math.random())
    const length = full ? 10 : Math.floor(Math.random() * Math.floor(10))
    const generated = Array.apply(null, { length }).map(Function.call, () =>
      generate(date)
    )
    data = [...data, ...generated]
    date.add(1, 'day')
  }

  return data
}

const data = mock()
