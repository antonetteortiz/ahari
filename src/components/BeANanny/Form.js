import React, { Component } from 'react';
import {
 Alert, Button, Card, CustomInput, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

import socket from "../../server";

export default class BeANannyForm extends Component {
  constructor(){
    super();
    this.state = {
      sending: false,
      sent: false,
      error: null,
      fields: this.clearFields()
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  clearFields(){
    return {
        name: '',  email: '', phone: '', hearAboutUs: '',
        totalYearsExperience: '', hasMultiplesExperience: '',
        hasSpecialNeedsExperience: '',  aboutYou: '',
        interestInChildren: '', highestLevelOfEducation: '',
        typeOfWork: '', canCommitToOneYear: '', resume: ''
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
    } else {
      console.log(`value is ${value}`);
      value = target.value;
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
      const {     name, email, phone, hearAboutUs,
                  totalYearsExperience, hasMultiplesExperience,
                  hasSpecialNeedsExperience,
                  aboutYou, interestInChildren, highestLevelOfEducation,
                  typeOfWork, canCommitToOneYear, resume } = fields;
      //  console.log()

      if(email && name && phone && hearAboutUs
              && totalYearsExperience && hasMultiplesExperience
              && hasSpecialNeedsExperience && aboutYou && interestInChildren && highestLevelOfEducation
              && typeOfWork && canCommitToOneYear && resume){
          socket.emit('nanny submits application', fields);
      } else {
        this.setState({error: 'please fill out all fields before sending'});
      }

  }



  render() {
    const { fields: { name, email, phone, hearAboutUs,
            totalYearsExperience, hasMultiplesExperience,
            hasSpecialNeedsExperience,
            aboutYou, interestInChildren, highestLevelOfEducation,
            typeOfWork, canCommitToOneYear, resume },
            error, sending, sent } = this.state;


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
            <h3 className='text-green'>Application</h3>
            <p>Welcome to Ahari Nannies! If you are a nanny who would like to apply to register with us, please fill out the information below. </p>

              { sent ? sentAlert : null }
              { sending ? sendingAlert : null }
              { error ? errorAlert : null }

              <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="">Name</Label>
                    <Input
                           type="text" name="name" id=""
                           placeholder="please provide your name"
                           onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email Address</Label>
                    <Input
                        type="email"
                        name="email" id="exampleEmail"
                        placeholder="please provide your email address"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Telephone Number</Label>
                    <Input
                        type="phone" name="phone" id="exampleEmail"
                        placeholder="please provide your phone number"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">How did you hear about Ahari Nannies?</Label>
                    <Input
                          type="textarea" name="hearAboutUs" id="exampleEmail"
                          placeholder=""
                          onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">How many years of professional childcare experience do you have?*(When answering please only consider paid work that took place over the age of 18.)</Label>
                    <Input
                        type="text" name="totalYearsExperience" id="exampleEmail"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Do you have multiples experience? Twins, Triplets, Nanny Share etc.</Label>
                    <Input
                        type="phone" name="hasMultiplesExperience" id="exampleEmail"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Do you have special needs experience?</Label>
                    <Input
                        type="phone" name="hasSpecialNeedsExperience" id="exampleEmail"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Tell us about you:</Label>
                    <Input
                          type="textarea" name="aboutYou" id="exampleEmail"
                          placeholder={`For example, My name is Megan and I am a 33 year old middle child of six siblings from Jersey City, New Jersey. I moved to Brooklyn 10 years ago and absolutely love the Park Slope area. My favorite things are outdoor activities, reading, taking walks and visiting with my Mom and family. I graduated from the City College of New York in 2014 with a Degree in ECE (Early Childhood Education). With over 10 years experience in the childcare field I feel that I have gained excellent childcare experience with children of all ages. I simply love children and enjoy helping them learn and grow at every stage of their young lives. My strengths as a nanny are that I am very responsible, reliable and caring person. I am passionate about furthering my time in the Nanny field so that I can continue doing what I love and broadening my experiences.`}
                          rows="10"
                          onChange={this.handleInputChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleEmail">What makes you interested in working with children? (Please elaborate, we want to get to know you! Feel free to tell us why you’re special, what your past families have loved about you, or the things that make you shine as a caregiver.)</Label>
                    <Input
                          type="textarea" name="interestInChildren" id="exampleEmail"

                          rows="10"
                          onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">What’s your highest level of education completed? (Some High School, High School, Some College, Associate’s Degree, Bachelor’s Degree, Some Master level Coursework, Master’s Coursework, Other)</Label>
                    <Input
                        type="text" name="highestLevelOfEducation" id="exampleEmail"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">What kind of work are you looking for? (Part Time, Full Time, Temp)</Label>
                    <Input
                        type="text" name="typeOfWork" id="exampleEmail"
                        onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Can you commit to a position for at least one year?</Label>
                    <CustomInput
                          type="radio"
                          id="exampleCustomRadio"
                          name="canCommitToOneYear"
                          label="Yes! I’m excited to work long-term with a family."
                          value='yes'
                          onChange={this.handleInputChange}

                    />
                    <CustomInput
                          type="radio"
                          id="exampleCustomRadio2"
                          name="canCommitToOneYear"
                          label="No, I can’t commit to a whole year."
                          value='no'
                          onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Please submit your resume below including at least three professional references and two character references.</Label>
                    <Input
                        type="file" name="resume" id="exampleEmail"
                        onChange={this.handleInputChange}
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
