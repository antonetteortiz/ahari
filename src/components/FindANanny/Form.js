import React, { Component } from 'react';
import {
 Alert, Button, Card, CustomInput, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

import socket from "../../server";
import validate from 'validate.js';

export default class FindANannyForm extends Component {
  constructor(){
    super();
    this.state = {
      sending: false,
      sent: false,
      error: null,
      errors: {},
      fields: this.clearFields()
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  clearFields(){
    return {
        name: '',  email: '', phone: '', address: '',
        city: '', state: '', zip: '',
        partnerName: '',
        aboutFamily: '',
        childrenNamesAndDobs: '',
        positionType: '',
        idealStartDate: ''
    }
  }

  componentWillMount(){
    socket.on('application recieved', () => {
      console.log('sent!');
      this.setState({
            sending: false, sent: true, error: false,
            fields: this.clearFields()
        })
    });

    socket.on('application failed', error => {
      console.log('sending failed')
      this.setState({sending: false, sent: false, error: error})
    });
  }

  handleInputChange(event) {
    const target = event.target;
    //  console.log(event);
    let value;

    // let value = target.type === 'checkbox' ? target.checked : target.value;
    //  let value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;
    //  console.log(name, value)

    if(target.files){
      let file = target.files[0];
      value = { Name: file.name, Content: file, ContentType: file.type };
      //  console.log(file.arrayBuffer());
    } else {
      value = target.value;
      console.log(`value is ${value}`);

    }

    const { fields } = this.state;

    this.setState({ fields: {
        ...fields,
        [`${name}`]: value
      }
    });
  }

  handleSubmit(event) {
      event.preventDefault();
      //  this.saveReview();
      const { fields } = this.state;
      const {   name,  email, phone, address,
        city, state, zip,
        partnerName,
        aboutFamily,
        childrenNamesAndDobs,
        positionType,
        idealStartDate } = fields;


        let constraints = {
          name: { presence: { allowEmpty: false } },
          email: { presence: { allowEmpty: false }},
          phone: { presence: { allowEmpty: false }},
          address: { presence: { allowEmpty: false }},
          city: { presence: { allowEmpty: false } },
          state: { presence: { allowEmpty: false } },
          zip: { presence: { allowEmpty: false } },
          aboutFamily: { presence: { allowEmpty: false } },
          childrenNamesAndDobs: { presence: { allowEmpty: false } },
          positionType: { presence: { allowEmpty: false } },
          idealStartDate: { presence: { allowEmpty: false } }
        }

        let errors = validate(fields, constraints);

      let error;
      if( errors == undefined ){
          console.log(`submitting`);
          socket.emit('submit parent application', fields);
          errors = {};
      } else {
        //  this.setState({error: `please fill out required fields before sending`, errors});
        error = `please fill out required fields before sending`;
      }

      this.setState({error, errors});


  }



  render() {
    const { fields: {  name,  email, phone, address,
                        city, state, zip,
                        partnerName,
                        aboutFamily,
                        childrenNamesAndDobs,
                        positionType,
                        idealStartDate },
            errors, error, sending, sent } = this.state;


    const section = 'contact';
    const sentAlert = <Alert color='blush'><b>Thanks for reaching out, we will be in touch soon!</b></Alert>
    const sendingAlert = <Alert color='blush'><b>Sending....</b></Alert>
    const errorAlert = <Alert color='blush'><b>{error}</b></Alert>

    return (

          <Card
              body
              className='border-0 p-5'
              color='ahariGreyn'
          >
            <h3 className='text-green'>Placement Application</h3>
            <p>Thank you for taking the first step in finding the perfect nanny for your family. Please take a minute to answer a couple quick questions and schedule a consultation with our team!</p>

              { sent ? sentAlert : null }
              { sending ? sendingAlert : null }
              { error ? errorAlert : null }

              <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="">Your Name</Label>
                    <Input
                           type="text" name="name" id=""
                           onChange={this.handleInputChange}
                           invalid={errors.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email Address</Label>
                    <Input
                        type="email"
                        name="email" id="exampleEmail"
                        onChange={this.handleInputChange}
                        invalid={errors.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Preferred Phone Number</Label>
                    <Input
                        type="phone" name="phone" id="exampleEmail"
                        onChange={this.handleInputChange}
                        invalid={errors.phone}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Home Address</Label>
                    <Input
                        type="text" name="address" id="exampleEmail"
                        onChange={this.handleInputChange}
                        invalid={errors.address}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">City</Label>
                    <Input
                        type="text" name="city"
                        onChange={this.handleInputChange}
                        invalid={errors.city}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">State</Label>
                    <Input
                        type="text" name="state"
                        onChange={this.handleInputChange}
                        invalid={errors.state}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Zip</Label>
                    <Input
                        type="text" name="zip"
                        onChange={this.handleInputChange}
                        invalid={errors.zip}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Spouse/Partner's Name</Label>
                    <Input
                        type="phone" name="partnerName" id="exampleEmail"
                        onChange={this.handleInputChange}
                        invalid={errors.partnerName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Tell us a little about your family</Label>
                    <Input
                          type="textarea" name="aboutFamily"
                          placeholder="Example: We are Sarah and Alex Williams and we just moved to Brooklyn from Kansas City with our twin boys. Sarah is CEO of a private label fashion company and Alex is an attorney, returning to work after being a stay-at-home mom for the past 2 years. We both enjoy running and training for marathons and we love to travel with the boys when possible!"
                          onChange={this.handleInputChange}
                          invalid={errors.aboutFamily}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Names and Birth Dates of Children</Label>
                    <Input
                        type="textarea" name="childrenNamesAndDobs" id="exampleEmail"
                        onChange={this.handleInputChange}
                        invalid={errors.childrenNamesAndDobs}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">What type of position and hours do you need? (free text)</Label>
                    <Input
                        type="textarea" name="positionType"
                        placeholder='Example: We need a full-time nanny that can take care of the boys Monday through Friday from 8 am - 6 pm. Flexibility for occasional date nights or overnights/travel would be helpful, too. Sarah’s job requires her to travel once a week, so extra help with dinner prep on those nights will be required. We would love to have a nanny for the next 2-3 years.'
                        onChange={this.handleInputChange}
                        invalid={errors.positionType}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">What is your ideal start date? (date field)</Label>
                    <Input
                        type="phone" name="idealStartDate" id="exampleEmail"
                        onChange={this.handleInputChange}
                        invalid={errors.idealStartDate}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button color='teal'>Apply</Button>
                  </FormGroup>
              </Form>
          </Card>

    );
  }
}
