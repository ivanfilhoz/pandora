import find from 'ramda/es/find'
import propEq from 'ramda/es/propEq'
import { PeopleHome } from '../components/pages/PeopleHome'
import { PlacesHome } from '../components/pages/PlacesHome'
import { PlaceAllocation } from '../components/pages/PlaceAllocation'
import reduce from 'ramda/es/reduce'
import keys from 'ramda/es/keys'
import pipe from 'ramda/es/pipe'
import prop from 'ramda/es/prop'
import replace from 'ramda/es/replace'
import { GuestAllocation } from '../components/pages/GuestAllocation'

export const fillRoute = (obj: Params) => (path: string) =>
  reduce((prev, next) => replace(':' + next, obj[next], prev), path, keys(obj))

export const route = (key: string, params: Params = {}) =>
  pipe(
    find(propEq('key', key))!,
    prop('path'),
    fillRoute(params)
  )(routes)

export const menu: Menu = {
  admin: [
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
  ],
  guest: [
    {
      key: 'allocation',
      label: 'Alocação',
      icon: 'calendar',
      items: [
        {
          key: 'list',
          label: 'Lista',
          path: '/alocacao'
        }
      ]
    }
  ]
}

export const routes: Route[] = [
  {
    key: 'places',
    path: '/estabelecimentos',
    component: PlacesHome
  },
  {
    key: 'place-allocation',
    path: '/estabelecimentos/:id',
    component: PlaceAllocation
  },
  {
    key: 'people',
    path: '/pessoal',
    component: PeopleHome
  },
  {
    key: 'guest-allocation',
    path: '/alocacao',
    component: GuestAllocation
  }
]

export const adminHome = routes[0]
export const guestHome = routes[3]

type Menu = {
  admin: Group[]
  guest: Group[]
}

type Router = {
  admin: Route[]
  guest: Route[]
}

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
  key: string
  path: string
  component: React.FunctionComponent
}

type Params = {
  [key: string]: string
}
