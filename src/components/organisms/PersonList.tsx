import * as React from 'react'
import { List, Skeleton, Avatar, Tag } from 'antd'
import faker = require('faker/locale/pt_BR')
const { Item } = List

export const PersonList: React.FunctionComponent = () => {
  const data: Person[] = mock()

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={person => (
        <Item actions={[<a>editar</a>, <a>excluir</a>]}>
          <Item.Meta
            avatar={<Avatar src={require('../../../assets/photo.jpg')} />}
            title={<a href="#">{person.name}</a>}
            description={person.phone}
          />
          <div>
            <Tag color={person.allocated ? 'green' : 'orange'}>
              {person.allocated ? 'Alocado' : 'Pendente'}
            </Tag>
          </div>
        </Item>
      )}
    />
  )
}

type Person = {
  name: string
  phone: string
  email: string
  allocated: boolean
}

const generate = () =>
  ({
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email().toLowerCase(),
    allocated: !!Math.round(Math.random())
  } as Person)

const mock = () =>
  Array.apply(null, { length: 12 }).map(Function.call, () => generate())
