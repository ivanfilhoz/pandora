import { LocaleProvider } from 'antd'
import antLocale from 'antd/lib/locale-provider/pt_BR'
import { locale } from 'moment'
import 'moment/locale/pt-br'
import * as React from 'react'
import { render } from 'react-dom'
import { App } from './src/App'
import { APIProvider } from './src/util/api'
locale('pt-br', {
  weekdaysMin: 'Dom Seg Ter Qua Qui Sex Sab'.split(' ')
})

render(
  <LocaleProvider locale={antLocale}>
    <APIProvider>
      <App />
    </APIProvider>
  </LocaleProvider>,
  document.getElementById('root')
)
