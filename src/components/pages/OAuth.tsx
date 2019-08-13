import * as React from 'react'
import { Content } from '../atoms/Content'
import { HeadlessLayout } from '../templates/HeadlessLayout'
import { Spin } from 'antd'
import { RouteComponentProps } from 'react-router'
import * as localStorage from 'local-storage'
import { home } from '../../util/routes'

export const OAuth: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {
  React.useEffect(() => {
    let state = localStorage.get('state')
    if (state === '/oauth') state = home.path
    if (state) history.push(state)
  })

  return (
    <HeadlessLayout>
      <Content>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spin size="large" />
        </div>
      </Content>
    </HeadlessLayout>
  )
}
