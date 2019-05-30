import * as React from 'react'
import { render } from 'react-dom'
import { LocaleProvider } from 'antd'
import antLocale from 'antd/lib/locale-provider/pt_BR'
import { locale } from 'moment'
import 'moment/locale/pt-br'
locale('pt-BR')
import { App } from './src/App'

render(
  <LocaleProvider locale={antLocale}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
)
