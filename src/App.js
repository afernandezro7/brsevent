import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import 'antd/dist/antd.css'
import './styles/styles.scss'
import { store } from './redux/store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}




