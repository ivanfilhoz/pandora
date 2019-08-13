import * as React from 'react'
import { Card, Avatar, Select, Button, Icon, Tag } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { Person, ListPeopleComponent } from '../../generated/graphql'
import pluck from 'ramda/es/pluck'
import includes from 'ramda/es/includes'
import reject from 'ramda/es/reject'
import equals from 'ramda/es/equals'
import { MutationUpdaterFn } from 'react-apollo'
import { EmptyAlert } from '../molecules/EmptyAlert'

interface IProps {
  people: Person[]
  loading: boolean
  onChange: (people: string[]) => void
  readOnly?: boolean
}

export const Allocator: React.FunctionComponent<IProps> = ({
  people,
  loading,
  onChange,
  readOnly
}) => {
  const [person, setPerson] = React.useState<string | undefined>(undefined)
  const allocated = pluck('id', people)
  const isAvailable = (person: Person) => !includes(person.id)(allocated)
  const takeOff = (person: Person) => reject(equals(person.id), allocated)

  const handleSelect = (id: string) => setPerson(id)
  const handleAdd = () => {
    onChange([...allocated, person!])
    setPerson(undefined)
  }
  const handleCrown = (person: Person) => () =>
    onChange([person.id, ...takeOff(person)])
  const handleDisallocate = (person: Person) => () => onChange(takeOff(person))

  return (
    <>
      {!readOnly && (
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
      )}
      {people.length ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'min-content',
            gridGap: 12
          }}
        >
          {people.map((person, index) => (
            <Card
              key={person.name}
              hoverable={!readOnly}
              actions={
                readOnly
                  ? []
                  : [
                      index ? (
                        <Icon
                          type="crown"
                          title="Definir como líder"
                          onClick={handleCrown(person)}
                        />
                      ) : (
                        undefined
                      ),
                      <Icon
                        type="delete"
                        title="Desalocar"
                        onClick={handleDisallocate(person)}
                      />
                    ].filter(_ => _)
              }
              style={{ position: 'relative' }}
            >
              <Meta
                avatar={
                  <Avatar
                    alt={person.photo ? `Foto de ${person.name}` : 'Sem foto'}
                    src={person.photo || require('../../../assets/photo.jpg')}
                  />
                }
                title={
                  <>
                    {person.name}
                    {!index && (
                      <Tag
                        color="blue"
                        style={{
                          position: 'absolute',
                          left: -20,
                          top: 0,
                          transform: 'rotate(-45deg)'
                        }}
                      >
                        <Icon type="crown" style={{ marginRight: 5 }} />
                        Líder
                      </Tag>
                    )}
                  </>
                }
                description={person.department}
              />
            </Card>
          ))}
        </div>
      ) : (
        <EmptyAlert />
      )}
    </>
  )
}
