import React, { Component } from 'react';
import {
 Alert, Button, Card, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

import socket from "../server";

class ContactUsSection extends Component {
  constructor(){
    super();
    this.state = {
      sending: false,
      sent: false,
      error: null,
      name: '',
      email: '',
      phone: '',
      message: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    socket.on('contact us message sent', () => {
      console.log('sent!');
      this.setState({
            sending: false, sent: true, error: false,
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    });

    socket.on('contact us message failed', error => {
      console.log('sending failed')
      this.setState({sending: false, sent: false, error: error})
    });
  }

  handleInputChange(event) {
    const target = event.target;
    //  console.log(event);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    //  console.log(name, value)
    this.setState({
      [`${name}`]: value
    });
  }
  handleSubmit(event) {
      event.preventDefault();
      //  this.saveReview();
      const { email , name, phone, message } = this.state;
      //  console.log()
      if(email && name && phone && message){
          socket.emit('contact us', {email, name, phone, message});
      } else {
        this.setState({error: 'please fill out all fields before sending'});
      }

  }



  render() {
    const { name, email, phone, message, error, sending, sent } = this.state;


    const section = 'contact';
    const sentAlert = <Alert color='blush'><b>Thanks for reaching out, we will be in touch soon!</b></Alert>
    const sendingAlert = <Alert color='blush'><b>Sending....</b></Alert>
    const errorAlert = <Alert color='blush'><b>{error}</b></Alert>

    return (

          <Card
              body
              className='border-0 p-5'
              color='ahariGrey'
          >
            <h3 className='text-green'>Contact Us</h3>

              { sent ? sentAlert : null }
              { sending ? sendingAlert : null }
              { error ? errorAlert : null }

              <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input
                           type="text" name="name" id="exampleEmail"
                           placeholder="please provide your name"
                           onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email" id="exampleEmail"
                        placeholder="please provide your email address"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Phone Number</Label>
                    <Input
                        type="phone" name="phone" id="exampleEmail"
                        placeholder="please provide your phone number"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleEmail">Message</Label>
                    <Input
                          type="textarea" name="message" id="exampleEmail"
                          placeholder="how can we help?"
                          onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color='teal'>send</Button>
                  </FormGroup>
              </Form>
          </Card>

    );
  }
}


export default ContactUsSection;
