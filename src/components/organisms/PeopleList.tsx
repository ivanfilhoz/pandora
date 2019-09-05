import { Avatar, Button, List, Tag } from 'antd'
import * as React from 'react'
import { Person } from '../../generated/graphql'
const { Item } = List

interface IProps {
  people: Person[]
  onEdit: (person: Person) => void
  onDelete: (person: Person) => void
}

export const PeopleList: React.FunctionComponent<IProps> = ({
  people,
  onEdit,
  onDelete
}) => (
  <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={people}
    pagination={{
      position: 'bottom'
    }}
    renderItem={person => (
      <Item
        actions={[
          <Button
            shape="circle"
            icon="edit"
            title="Editar"
            onClick={() => onEdit(person)}
          />,
          <Button
            shape="circle"
            icon="delete"
            title="Excluir"
            onClick={() => onDelete(person)}
          />
        ]}>
        <Item.Meta
          avatar={
            <Avatar
              src={person.photo || require('../../../assets/photo.jpg')}
            />
          }
          title={<a href="#">{person.name}</a>}
          description={person.department || ''}
        />
        <div>
          <Tag color={'green'}>{'Regular'}</Tag>
        </div>
      </Item>
    )}
  />
)
