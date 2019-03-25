import React from 'react';
import {Form, Label, Input, Button} from 'reactstrap';
import FormGroup from "reactstrap/es/FormGroup";



class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      attempts: 0,   // experiment for later
      modal: false,
    }

  }


  loginInputHandler = e => {
    // use controlled component to manage events
    this.setState({[e.target.name]: e.target.value} );

  };

  loginHandleSubmitHandler  = e => {
    //e.preventDefault();   // no effect?

    console.log("username LOGGED!!!! ");
    localStorage.setItem("username", this.state.username);
    window.location.reload();  // we reload anyways from submit?
  };


  render(){
    return (


      <Form>
        <FormGroup>
          <Label >Username</Label>
          <Input
            type = "text"
            placeholder = " enter username"
            name = "username"
            value = {this.state.username}
            onChange = {this.loginInputHandler}
          />

          <Label>Password</Label>
          <Input
            type = "password"
            placeholder = " enter password"
            name = "password"
            value = {this.state.password}
            onChange = {this.loginInputHandler}
          />


          <Button
            onClick={this.loginHandleSubmitHandler}
          >Submit</Button>

        </FormGroup>
      </Form>



    )
  }

}

export default Login;