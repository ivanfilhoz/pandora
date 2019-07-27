import * as React from 'react'
import { Avatar, Icon, Card, message } from 'antd'
import { Place } from '../../generated/graphql'
import { CardGrid } from '../atoms/CardGrid'

interface IProps {
  places: Place[]
  onOpen: (place: Place) => void
  onEdit: (place: Place) => void
  onDelete: (place: Place) => void
}

export const PlacesList: React.FunctionComponent<IProps> = ({
  places,
  onOpen,
  onEdit,
  onDelete
}) => {
  const unbubble = (callback: () => void) => (event: React.MouseEvent) => {
    event.stopPropagation()
    callback()
  }

  const onReport = () => {
    message.info('O relatório ainda não está disponível!')
  }

  return (
    <CardGrid>
      {places.map(place => (
        <Card
          key={place!.id}
          hoverable
          onClick={() => onOpen(place)}
          actions={[
            <Icon type="calendar" title="Alocação" />,
            <Icon
              type="line-chart"
              title="Relatório"
              onClick={unbubble(() => onReport())}
            />,
            <Icon
              type="edit"
              title="Editar"
              onClick={unbubble(() => onEdit(place))}
            />,
            <Icon
              type="delete"
              title="Excluir"
              onClick={unbubble(() => onDelete(place))}
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
