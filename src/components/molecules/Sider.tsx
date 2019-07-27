import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { menu } from '../../util/routes'
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
      {menu.map(group =>
        group.items.length === 1 ? (
          <Item key={group.key + '-' + group.items[0].key}>
            <Link to={group.items[0].path}>
              <Icon type={group.icon} />
              {group.label}
            </Link>
          </Item>
        ) : (
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
        )
      )}
    </Menu>
  </RawSider>
)
