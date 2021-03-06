import React from 'react'

import { Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux'

import { addBook } from '../../actions/booksAction';

import propTypes from 'prop-types';

class Add extends React.Component {
    state = {
        id: '',
        auth_id: '',
        isbn: '',
        title: '',
        img: '',
        data: '',
        url: '',
        mainImg: '',
    }
    change = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
            const formData = [{}];
            formData[0].id = this.state.id
            formData[0].auth_id = this.state.auth_id
            formData[0].isbn = this.state.isbn
            formData[0].title = this.state.title
            formData[0].img = this.state.img
            formData[0].data = this.state.data
            formData[0].url = this.state.url
            formData[0].mainImg = this.state.mainImg

            this.props.addBook(formData);
            
            this.setState ({
                id: '',
                auth_id: '',
                isbn: '',
                title: '',
                img: '',
                data: '',
                url: '',
                mainImg: '',
            })
    }
    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <div className = "container">
                    <Form>
                        <Form.Group controlId="formid">
                            <Form.Label>Id</Form.Label>
                            <Form.Control value = {this.state.id} 
                            name = 'id'
                            type="id" placeholder="Enter id" 
                            onChange = {e => this.change(e)}
                            />                    
                        </Form.Group>

                        <Form.Group controlId="formauth_id">
                            <Form.Label>Auth_id</Form.Label>
                            <Form.Control value={this.state.auth_id}
                            name = 'auth_id'
                            type="id" placeholder="Enter auth_id" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formisbn">
                            <Form.Label>Isbn</Form.Label>
                            <Form.Control value={this.state.isbn}
                            name = 'isbn'
                            type="id" placeholder="Enter isbn" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formtitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control value={this.state.title}
                            name='title'
                            type="id" placeholder="Enter title" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formimg">
                            <Form.Label>Img</Form.Label>
                            <Form.Control value={this.state.img}
                            name = 'img'
                            type="id" placeholder="Enter img" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formData">
                            <Form.Label>Data</Form.Label>
                            <Form.Control value={this.state.data}
                            name = 'data'
                            type="id" placeholder="Enter Data" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formurl">
                            <Form.Label>Url</Form.Label>
                            <Form.Control value={this.state.url}
                            name = 'url'
                            type="id" placeholder="Enter Url" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formmainImg">
                            <Form.Label>Main Img</Form.Label>
                            <Form.Control value={this.state.mainImg}
                            name = 'mainImg'
                            type="id" placeholder="Enter mainImg" 
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

Add.propTypes = {
    addBook: propTypes.func.isRequired,
  }
export default connect(null, { addBook })(Add);