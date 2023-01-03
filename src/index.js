import React from 'react'
// import ReactDom from 'react-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './store/reducers'

import App from './app'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

// ReactDom.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     , document.getElementById('root'))


    const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </Provider>
)