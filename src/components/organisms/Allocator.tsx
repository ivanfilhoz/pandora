import { Avatar, Card, Col, Icon, Modal, Row, Select, Tag } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Text from 'antd/lib/typography/Text'
import equals from 'ramda/es/equals'
import includes from 'ramda/es/includes'
import pluck from 'ramda/es/pluck'
import reject from 'ramda/es/reject'
import * as React from 'react'
import { ListPeopleComponent, Person } from '../../generated/graphql'
import { lowerContains } from '../../util/filter'
import { ButtonBar } from '../atoms/ButtonBar'
import { RightCol } from '../atoms/RightCol'
import { EmptyAlert } from '../molecules/EmptyAlert'

interface IProps {
  headcount: number
  people: Person[]
  loading: boolean
  onChange: (people: string[]) => void
  readOnly?: boolean
}

export const Allocator: React.FunctionComponent<IProps> = ({
  headcount,
  people,
  loading,
  onChange,
  readOnly
}) => {
  const [person, setPerson] = React.useState<string | undefined>(undefined)
  const allocated = pluck('id', people)
  const isAvailable = (person: Person) => !includes(person.id)(allocated)
  const takeOff = (person: Person) => reject(equals(person.id), allocated)
  const full = people.length >= headcount

  React.useEffect(() => {
    if (person && allocated.includes(person)) setPerson(undefined)
  }, [people])

  const handleSelect = (id: string) => {
    setPerson(id)
    onChange([...allocated, id!])
  }
  const handleCrown = (person: Person) => () =>
    onChange([person.id, ...takeOff(person)])
  const handleDisallocate = (person: Person) => () => onChange(takeOff(person))
  const handlePhoto = (person: Person) => () =>
    Modal.info({
      title: person.photo ? `Foto de ${person.name}` : 'Oops!',
      content: person.photo ? (
        <img
          src={person.photo}
          alt={`Foto de ${person.name}`}
          style={{ width: '100%' }}
        />
      ) : (
        `${person.name} não tem foto cadastrada.`
      ),
      okText: 'Certo!'
    })

  const handleFilter = (inputValue: string, option: React.ReactElement) => {
    const parts = option.props.children as React.Component[]
    const name = parts[0]!.props.children as string
    const department = parts[1]!.props.children as string[]
    const text = [name, ...department].join('')
    return lowerContains(inputValue)(text)
  }

  return (
    <>
      <Row style={{ marginBottom: 24 }}>
        <Col span={8} style={{ lineHeight: '32px' }}>
          Alocadas {people.length} de {headcount} pessoas
        </Col>
        <RightCol span={16}>
          {!readOnly && (
            <ButtonBar
              buttons={[
                <ListPeopleComponent>
                  {({ loading: loadingPeople, error, data }) => (
                    <Select
                      showSearch
                      placeholder={
                        full
                          ? 'Alocação completa'
                          : 'Selecione uma pessoa para alocar'
                      }
                      value={person}
                      loading={loading || loadingPeople || !!person}
                      optionFilterProp="children"
                      filterOption={handleFilter}
                      disabled={full}
                      onChange={handleSelect}
                      style={{ width: 300 }}>
                      {!loadingPeople &&
                        !error &&
                        data!
                          .listPeople!.items!.filter(isAvailable)
                          .map(person => (
                            <Select.Option key={person!.id} value={person!.id}>
                              {/* {person!.name} */}
                              <Text>{person!.name}</Text>
                              <Text type="secondary">
                                {' '}
                                / {person!.department}
                              </Text>
                            </Select.Option>
                          ))}
                    </Select>
                  )}
                </ListPeopleComponent>
              ]}
            />
          )}
        </RightCol>
      </Row>

      {people.length ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'min-content',
            gridGap: 12
          }}>
          {people.map((person, index) => (
            <Card
              key={person.name}
              hoverable={!readOnly}
              actions={[
                !!index && !readOnly && (
                  <Icon
                    type="crown"
                    title="Definir como líder"
                    onClick={handleCrown(person)}
                  />
                ),
                <Icon
                  type="camera"
                  title="Ver foto"
                  onClick={handlePhoto(person)}
                />,
                !readOnly && (
                  <Icon
                    type="delete"
                    title="Desalocar"
                    onClick={handleDisallocate(person)}
                  />
                )
              ].filter(_ => _)}
              style={{ position: 'relative' }}>
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
                        }}>
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
