import React from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import App from "./components/App"
import View from './components/View';

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
    <View/>
  </Provider>,
  document.getElementById('root')
)

