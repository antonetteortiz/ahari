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

              <Row className='align-items-center'>
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

              <ScrollableSection hash={'#fees'} title="Fees" exact>
              <span>

                <Row className='align-items-center'>
                  <Col className='d-flex justify-content-start'>
                  <img className='img-fluid' src={pic1} />
                  </Col>
                  <Col className='d-flex justify-content-end'>
                        <Card className='border-0 pt-5 pb-5'>
                        <h1 className='text-terracotta'>Fees</h1>
                        <h3 className='text-plum'>Application Fee</h3>
                            <p className='lead'>
                                There is a $250 application fee to begin the process for any placement, this amount is deducted from the total nanny placement fee when you hire your nanny. This is a non-refundable fee that is used to cover the cost incurred in screening and recruiting.
                            </p>

                            <h4 className='text-plum'>Placement Fee</h4>
                            <p className='lead'>
                                Once you have found a nanny, a placement fee of 15% of the employee’s total gross annual compensation package ($2,500 minimum) will be charged.
                                The following benefits are included as a part of the placement fee:
                            </p>

                          <ListGroup className='border-0 '>
                            <ListGroupItem className='border-0 '>
                                <FaSquare className='text-plum'/> &nbsp; 60-Day Replacement Policy
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                                <FaSquare className='text-plum' /> &nbsp; Enhanced Security Background Investigation
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Criminal History Search Including All Locations Lived in During the Past 7 Years
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Auxiliary National Criminal Search Including Records for the Past 7 years
                            </ListGroupItem>

                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Global Terrorist Search
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Social Security Number Trace
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Motor Vehicle Report
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Verification of CPR Certification
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-plum' /> &nbsp; Professionally Drafted Employment Agreement Personally Tailored to Your Household
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
