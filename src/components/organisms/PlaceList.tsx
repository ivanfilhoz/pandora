import * as React from 'react'
import { Avatar, Icon, Card } from 'antd'
import { Place } from '../../generated/graphql'
import { CardGrid } from '../atoms/CardGrid'

interface IProps {
  places: Place[]
  onOpen: (place: Place) => void
  onEdit: (place: Place) => void
  onDelete: (place: Place) => void
}

export const PlaceList: React.FunctionComponent<IProps> = ({
  places,
  onOpen,
  onEdit,
  onDelete
}) => {
  return (
    <CardGrid>
      {places.map(place => (
        <Card
          key={place!.id}
          hoverable
          onClick={() => onOpen(place)}
          actions={[
            <Icon
              type="calendar"
              title="Alocação"
              onClick={() => onOpen(place)}
            />,
            <Icon type="edit" title="Editar" onClick={() => onEdit(place)} />,
            <Icon type="link" />,
            <Icon
              type="delete"
              title="Excluir"
              onClick={() => onDelete(place)}
            />
          ]}
        >
          <Card.Meta
            avatar={<Avatar alt="Sem foto" icon="shop" />}
            title={place!.name}
            description={place!.headcount + ' seguranças'}
          />
        </Card>
      ))}
    </CardGrid>
  )
}
