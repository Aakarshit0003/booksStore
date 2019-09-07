import React from 'react'

import { Button, Form } from 'react-bootstrap';

import { signUp } from '../actions/authAction'

import propTypes from 'prop-types'

import { connect } from 'react-redux'


class Sign extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        phone_no: ''
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state);
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

                        <Form.Group controlId="formemail">
                            <Form.Label>email</Form.Label>
                            <Form.Control value={this.state.isbn}
                            name = 'email'
                            placeholder="Enter email" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formphone">
                            <Form.Label>Phone_no</Form.Label>
                            <Form.Control value={this.state.title}
                            name='phone_no'
                            placeholder="Enter phone_no" 
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
Sign.propTypes = {
    signUp: propTypes.func.isRequired
}
export default connect(null, { signUp })(Sign);