import React from 'react'
// import ReactDom from 'react-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './store/reducers'
import { HashRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

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
    <GoogleOAuthProvider clientId='162363952181-kf63730gj3mibl31php8eb1lq1h0lkv5.apps.googleusercontent.com'>
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
  </Provider>
)