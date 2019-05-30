import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { routes } from '../../util/routes'
import { Link } from 'react-router-dom'
const { SubMenu, Item } = Menu
const { Sider: RawSider } = Layout

interface IProps {
  path: string[]
}

export const Sider: React.FunctionComponent<IProps> = ({ path }) => (
  <RawSider width={200} style={{ background: '#fff' }}>
    <Menu
      mode="inline"
      defaultOpenKeys={[path[0]]}
      selectedKeys={[path.join('-')]}
      style={{ height: '100%', borderRight: 0 }}
    >
      {routes.map(group => (
        <SubMenu
          key={group.key}
          title={
            <span>
              <Icon type={group.icon} />
              {group.label}
            </span>
          }
        >
          {group.items.map(item => (
            <Item key={group.key + '-' + item.key}>
              <Link to={item.path}>{item.label}</Link>
            </Item>
          ))}
        </SubMenu>
      ))}
      <SubMenu
        key="settings"
        title={
          <span>
            <Icon type="laptop" />
            Configurações
          </span>
        }
      >
        <Item key="5">option5</Item>
        <Item key="6">option6</Item>
        <Item key="7">option7</Item>
        <Item key="8">option8</Item>
      </SubMenu>
      <SubMenu
        key="alerts"
        title={
          <span>
            <Icon type="notification" />
            Alertas
          </span>
        }
      >
        <Item key="9">option9</Item>
        <Item key="10">option10</Item>
        <Item key="11">option11</Item>
        <Item key="12">option12</Item>
      </SubMenu>
    </Menu>
  </RawSider>
)
