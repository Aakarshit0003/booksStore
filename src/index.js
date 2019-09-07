import React from 'react'

import ReactDOM from 'react-dom'

import  './css/style.css'

import Navbar from './Components/navbar'

import Home from './Components/home'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store'

import Routes from './routes'


    const routing = (
    <Provider store = { store }>
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Routes />
            </div>
        </Router>
    </Provider>
    )

ReactDOM.render(
  routing,
  document.getElementById('root')  
);
