import React from 'react'

import { Button, Form } from 'react-bootstrap';

import { login } from '../actions/authAction'

import propTypes from 'prop-types'

import { connect } from 'react-redux'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            username: '',
            password: ''
        });
    }
    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <div className = "container">
                    <Form>
                        <Form.Group controlId="formusrname">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value = {this.state.id} 
                            name = 'username'
                            placeholder="Enter username" 
                            onChange = {e => this.change(e)}
                            />                    
                        </Form.Group>

                        <Form.Group controlId="formpwd">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={this.state.auth_id}
                            name = 'password'
                            placeholder="Enter password" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Button onClick={e => this.onSubmit(e)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
Login.propTypes = {
    login: propTypes.func.isRequired,
  }
export default connect(null, { login })(Login);


  