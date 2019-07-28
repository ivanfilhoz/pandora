import * as React from 'react'
import { Card, Avatar } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { Allocation, Person } from '../../generated/graphql'

interface IProps {
  people: Person[]
  loading: boolean
}

export const Allocator: React.FunctionComponent<IProps> = ({
  people,
  loading
}) => {
  return (
    <div
      style={{
        padding: 12,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'min-content',
        gridGap: 12
      }}
    >
      {people.map(person => (
        <Card key={person.name} hoverable>
          <Meta
            avatar={
              <Avatar
                alt={person.photo ? `Foto de ${person.name}` : 'Sem foto'}
                src={person.photo || require('../../../assets/photo.jpg')}
              />
            }
            title={person.name}
            description={person.department}
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
  )
}
