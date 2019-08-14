import * as React from 'react'
import { render } from 'react-dom'
import { APIProvider } from './src/util/api'
import { LocaleProvider } from 'antd'
import antLocale from 'antd/lib/locale-provider/pt_BR'
import 'moment/locale/pt-br'
import { App } from './src/App'
import { locale } from 'moment'
locale('pt-BR')

render(
  <LocaleProvider locale={antLocale}>
    <APIProvider>
      <App />
    </APIProvider>
  </LocaleProvider>,
  document.getElementById('root')
)
