import alertify from 'alertifyjs';
import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from "reactstrap"

export default class formdemo extends Component {
    state= {userName: '', city:''}
    onChangeHandler= (event)=>{
    //     this.setState({userName:event.target.value})
    let name= event.target.name;
    let value=event.target.value;

    this.setState({[name]:value})
    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
        alertify.success(this.state.userName + "login!");
    }
  render() {
    return (
      <div>
        <Form>
       <FormGroup>
                <Label for="userName">UserName</Label>
                <Input type="userName"name="userName" id="userName" placeholder='Enter User Name' onChange={this.handleChange} />
            </FormGroup> 
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password"name="password" id="password" placeholder='Enter User Password' onChange={this.handleChange} />
            </FormGroup>  
            <Button type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}
