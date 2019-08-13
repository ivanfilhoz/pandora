import * as React from 'react'
import { Layout, Menu } from 'antd'
import { withRouter } from 'react-router'
import { logout } from '../../util/auth'
const { Header: RawHeader } = Layout

export const Header = withRouter(({ location }) => (
  <RawHeader className="header">
    <div className="logo" id="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px', float: 'right' }}
    >
      <Menu.Item key="1" onClick={() => logout(location.pathname)}>
        Sair
      </Menu.Item>
    </Menu>
  </RawHeader>
))
