import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button,
  Card, CardBody, CardDeck, CardFooter, CardImg, CardText, CardTitle,
  Col, Collapse, Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  ListGroup, ListGroupItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown

 } from 'reactstrap';
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';
import "../styles/index.scss";

import moment from 'moment';

import NavTabs from "../components/FindANanny/Tabs";
import NannyForm from "../components/FindANanny/Form";

import findAnannyPic from "../images/african-american-father-holding-his-little-daughters-feet-african-american-father-holding-his-daughters-feet-107471075.jpg";
import beAnannyPic from "../images/mother-children-playing-building-blocks-bedroom-93540028.jpg";
import pic1 from '../images/ahari-find-a-nanny.jpg';
import pic2 from '../images/ahari-find-a-nanny-2.png';

import { FaSquare } from 'react-icons/fa';

export default class FindANannyPage extends Component {

  static contextTypes = {
     router: PropTypes.object
   };

  render() {
    //  console.log(this.props.params);

    return (
      <span>
      <Container style={{marginTop: "134px"}}>
          <Row>
            <Col className='d-flex justify-content-center'>
              <NavTabs/>
            </Col>
          </Row>
      </Container>

      <Jumbotron className='p-0 m-0 bg-white' fluid>
        <ScrollableSection hash={'#why'} title="Why Work With Us?" exact>
            <span>

              <Row className=''>
                <Col className='d-flex justify-content-start'>
                      <Card className='border-0 p-5'>
                        <CardBody>
                            <h1 className='text-terracotta'>Why Work With Us?</h1>
                            <p className='lead'>Ahari is a family-oriented agency with great family values. Our goal is to match families with the most suitable nannies and be there for both parties whenever they need us. We will continue to provide support when needed even after the match is made, we’ll be there with you every step of the way until both parties are comfortably settled in. At Ahari, we make it a point of duty to help both parties communicate better and offer assistance in any way we can.</p>
                            <p className='lead'>We’re extremely devoted to our clients, which is part of what makes us so efficient. Our service commences as soon as we give you a formal application to fill. This will provide us with background information about your family and help us understand what you want in a nanny. Our goal is to introduce you to nannies that match your requirements, criteria and are within your price bracket. Our job is to ensure that the entire recruitment process goes smoothly.</p>
                        </CardBody>
                      </Card>
                </Col>
                <Col className='d-flex justify-content-end'>
                <img className='img-fluid' src={pic2} />
                </Col>
              </Row>
            </span>
        </ScrollableSection>
      </Jumbotron>

      <Jumbotron className='p-0 bg-white'>

              <ScrollableSection hash={'#requirements'} title="Requirements" exact>
              <span>

                <Row className=''>
                  <Col className='d-flex justify-content-start'>
                  <img className='img-fluid' src={pic1} />
                  </Col>
                  <Col className='d-flex justify-content-end'>
                        <Card className='border-0 pt-5 pb-5'>
                          <ListGroup className='border-0 '>
                            <ListGroupItem className='border-0 '>
                                <FaSquare className='text-plum'/> &nbsp; Must genuinely love working with children
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                                <FaSquare className='text-plum' /> &nbsp; Must have spent at least 3 years providing professional childcare services (2 of which must have been spent working for a private home as a nanny)
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Stellar references
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must be able to commit to a family for one year
                            </ListGroupItem>

                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must reside in New York City
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must possess a High School Diploma or College degree, (preferably with child/psychology-related coursework)
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must be legally qualified to work and reside in the U.S.
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must have sound knowledge of the English Language
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; No criminal record
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must have first aid and CPR certification (or be willing to get the certification from your own pocket)
                            </ListGroupItem>


                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must be ready to be employed legally and paid through a payroll service
                            </ListGroupItem>

                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Must not be a smoker
                            </ListGroupItem>

                          </ListGroup>
                        </Card>
                  </Col>
                </Row>
              </span>
              </ScrollableSection>
      </Jumbotron>
      <Container>
          <Row className='p-5'>
            <Col className='d-flex justify-content-center'>
              <ScrollableSection hash={'#application'} title="Application" exact>

                  <NannyForm />

              </ScrollableSection>
            </Col>
          </Row>
          <Row className='' >
            <Col className='d-flex justify-content-center'>
            <footer className="mastfoot">
              <div className="inner">
                <p>&#169; {moment().format('YYYY')} Ahari Nannies | All Rights Reserved</p>
              </div>
            </footer>
            </Col>
          </Row>
      </Container>
      </span>
    );
  }
}
