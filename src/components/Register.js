import alertify from 'alertifyjs';
import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from "reactstrap"

export default class Form extends Component {
  render() {
    state = {userName:"", email:"", password:"", description:"", city:""}
    handleChange=(event) => {
        let name= event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }

    handleSubmit= (event)=> {
        event.preventDefault();
        alertify.success(this.state.userName + "register!");
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="userName">UserName</Label>
                <Input type="userName"name="userName" id="userName" placeholder='Enter User Name' onChange={this.handleChange} />
            </FormGroup> 
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder='Enter User email' onChange={this.handleChange} />
            </FormGroup>  
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password"name="password" id="password" placeholder='Enter User Password' onChange={this.handleChange} />
            </FormGroup>  
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea"name="description" id="description" placeholder='Enter User Description' onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="city">city</Label>
                <Input type="select"name="city" id="city" placeholder='Enter User Description' onChange={this.handleChange}>
                    <option>İzmir</option>
                    <option>İstanbul</option>
                    <option>Ankara</option>
                    <option>Manisa</option>
                    <option>Amasya</option>
                    <option>Adana</option>
                    <option>Samsun</option>
                </Input>
            </FormGroup>
            <Button type="submit">Register</Button>


        </Form>
      </div>
    )
  }
}
