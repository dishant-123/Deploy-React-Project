import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Display from './Components/display.js'
import {Form,Button} from 'react-bootstrap';
export default class AddBook extends Component
{
    getDetails(){
            
    }
    render()
    {
        return <Form onSubmit="getDetails">
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="email"/>
            <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="password"/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


    }
}