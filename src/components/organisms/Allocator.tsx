import * as React from 'react'
import { Card, Avatar, Select, Button } from 'antd'
import Meta from 'antd/lib/card/Meta'
import {
  Allocation,
  Person,
  ListPeopleComponent
} from '../../generated/graphql'
import pluck from 'ramda/es/pluck'
import includes from 'ramda/es/includes'

interface IProps {
  people: Person[]
  loading: boolean
  onChange: (people: string[]) => void
}

export const Allocator: React.FunctionComponent<IProps> = ({
  people,
  loading,
  onChange
}) => {
  const [person, setPerson] = React.useState<string | undefined>(undefined)
  const allocated = pluck('id', people)
  const isAvailable = (person: Person) => !includes(person.id)(allocated)

  const handleSelect = (id: string) => setPerson(id)
  const handleAdd = () => {
    onChange([...allocated, person!])
    setPerson(undefined)
  }

  return (
    <>
      <div>
        <ListPeopleComponent>
          {({ loading: loadingPeople, error, data }) => (
            <Select
              showSearch
              placeholder="Selecione uma pessoa"
              disabled={loading || loadingPeople}
              value={person}
              onChange={handleSelect}
              style={{ width: 300, marginBottom: 24, marginRight: 12 }}
            >
              {!loadingPeople &&
                !error &&
                data!.listPeople!.items!.filter(isAvailable).map(person => (
                  <Select.Option key={person!.id} value={person!.id}>
                    {person!.name}
                  </Select.Option>
                ))}
            </Select>
          )}
        </ListPeopleComponent>
        <Button type="primary" disabled={!person} onClick={handleAdd}>
          Alocar
        </Button>
      </div>
      <div
        style={{
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
      </div>
    </>
  )
}
