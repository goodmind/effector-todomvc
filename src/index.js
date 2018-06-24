//@flow

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {whyDidYouUpdate} from 'why-did-you-update'
import App from './components/App'
import store from './store/shape'
import './store/reducer'
import 'todomvc-app-css/index.css'

whyDidYouUpdate(React)

store.watch(state => {
  console.error(state)
})

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}
