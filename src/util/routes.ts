import { PeopleAllocation } from '../components/pages/PeopleAllocation'
import { PeopleList } from '../components/pages/PeopleList'

export const routes: Group[] = [
  {
    key: 'people',
    label: 'Pessoal',
    icon: 'user',
    items: [
      {
        key: 'allocation',
        label: 'Alocação',
        path: '/pessoal/alocacao',
        component: PeopleAllocation
      },
      {
        key: 'list',
        label: 'Cadastro',
        path: '/pessoal/cadastro',
        component: PeopleList
      }
    ]
  }
]

type Group = {
  key: string
  label: string
  icon: string
  items: Route[]
}

type Route = {
  key: string
  label: string
  path: string
  component: React.FunctionComponent
}
