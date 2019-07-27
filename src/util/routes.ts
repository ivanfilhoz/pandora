import { PeopleHome } from '../components/pages/PeopleHome'
import { PlacesHome } from '../components/pages/PlacesHome'

export const menu: Group[] = [
  {
    key: 'places',
    label: 'Estabelecimentos',
    icon: 'shop',
    items: [
      {
        key: 'list',
        label: 'Lista',
        path: '/estabelecimentos'
      }
    ]
  },
  {
    key: 'people',
    label: 'Pessoal',
    icon: 'user',
    items: [
      {
        key: 'list',
        label: 'Lista',
        path: '/pessoal'
      }
    ]
  }
]

export const routes: Route[] = [
  {
    path: '/estabelecimentos',
    component: PlacesHome
  },
  {
    path: '/pessoal',
    component: PeopleHome
  }
]

export const home = '/estabelecimentos'

type Group = {
  key: string
  label: string
  icon: string
  items: Link[]
}

type Link = {
  key: string
  label: string
  path: string
}

type Route = {
  path: string
  component: React.FunctionComponent
}
