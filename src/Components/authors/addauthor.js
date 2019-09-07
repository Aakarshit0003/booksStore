import React from 'react'

import { Button, Form } from 'react-bootstrap';

import { addAuthor } from '../../actions/authorsAction'

import propTypes from 'prop-types'

import { connect } from 'react-redux'



class Add extends React.Component {
    state = {
        id: '',
        img: '',
        name: '',
        data: '',
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
            formData[0].name = this.state.name
            formData[0].img = this.state.img
            formData[0].data = this.state.data
            formData[0].mainImg = this.state.mainImg
            
            this.props.addAuthor(formData);

            this.setState ({
                id: '',
                img: '',
                name: '',
                data: '',
                mainImg: '',
          })
    }
    render() {
        return (
            <div>
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

                        <Form.Group controlId="formimg">
                            <Form.Label>Img</Form.Label>
                            <Form.Control value={this.state.img}
                            name = 'img'
                            type="id" placeholder="Enter img" 
                            onChange = {e => this.change(e)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={this.state.name}
                            name = 'name'
                            type="id" placeholder="Enter Name" 
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
    addAuthor: propTypes.func.isRequired
}
export default connect(null, { addAuthor })(Add);