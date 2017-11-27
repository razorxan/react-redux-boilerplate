import React from 'react'
import {render} from 'react-dom'
import {bindActionCreators, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import App from './App.jsx'


const store = createStore(Reducers, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
)
