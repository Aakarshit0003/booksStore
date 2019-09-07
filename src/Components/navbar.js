import React from 'react'

import { Button,Nav,Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

import propTypes from 'prop-types'

import { logout } from '../actions/authAction'

class Navigation extends React.Component {
    render() {
        return (
          <div>
            {this.props.isUser && localStorage.token ?
            <div>
            <Navbar bg = "dark" sticky="top">
              <Nav.Item>
                <Link to = "/"><Button variant="info">Home </Button></Link>
              </Nav.Item>            
              <Nav.Item>
                <Link to = "/books"><Button variant="danger">Books </Button></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to = "/addbook"><Button variant="warning">Add book </Button></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to = "/updbook"><Button variant="primary">Update book </Button></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to ="/authors"><Button variant="success">Authors </Button></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to = "/addauth"><Button variant="warning">Add author </Button></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to = "/updauth"><Button variant="primary">Update author </Button></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to = "/logout"><Button variant="warning" onClick = {e=>this.props.logout(e)}>Logout</Button></Link>
              </Nav.Item>
            </Navbar>
            </div>
          :<div>
            <Navbar bg = "dark" sticky="top">
              <Nav.Item>
                <Link to = "/login"><Button variant="warning">Login</Button></Link>
              </Nav.Item>
              <Nav.Item>
                <Link to = "/signup"><Button variant="primary">Signup</Button></Link>
              </Nav.Item>
            </Navbar>
            </div>}
          </div>
        );
    }
}
Navigation.propTypes = {
  logout: propTypes.func.isRequired
}
const mapStateToProps = state => ({
  isUser: state.get.user
})
export default connect(mapStateToProps, { logout })(Navigation)