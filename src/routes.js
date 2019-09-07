import React from 'react'

import  './css/style.css'

import Books from './Components/books/books'

import Home from './Components/home'

import Authors from './Components/authors/authors'

import addBook from './Components/books/addbook'

import updBook from './Components/books/updbook'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import addAuthor from './Components/authors/addauthor'

import updAuthor from './Components/authors/updauthor'

import Sign from './Components/signin'

import Login from './Components/login'

import { connect } from 'react-redux';


class Routes extends React.Component {
    render() {
        return (
            <div>
                {this.props.isUser && localStorage.token ? 
                <div>
                <Route exact path ="/books" component = { Books } />
                <Route exact path = "/" component = { Home } />
                <Route exact path = "/authors" component = { Authors } />
                <Route exact path = "/addbook" component = { addBook } />
                <Route exact path = "/updbook" component = { updBook } />
                <Route exact path = "/addauth" component = { addAuthor } />
                <Route exact path = "/updauth" component = { updAuthor } />
                <Route exact path = "/logout" component = { updAuthor } />
                </div>
                : <div>
                    
                    <Route exact path = "/signup" component = { Sign } />
                    <Route exact path = "/login" component = { Login } />
                </div>}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isUser: state.get.user
})
export default connect(mapStateToProps, null)(Routes);