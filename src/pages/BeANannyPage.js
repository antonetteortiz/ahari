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

import NavTabs from "../components/BeANanny/Tabs";
import NannyForm from "../components/BeANanny/Form";

import findAnannyPic from "../images/african-american-father-holding-his-little-daughters-feet-african-american-father-holding-his-daughters-feet-107471075.jpg";
import beAnannyPic from "../images/mother-children-playing-building-blocks-bedroom-93540028.jpg";
import pic from "../images/ahari-be-a-nanny.jpg";

import { FaSquare } from 'react-icons/fa';

export default class BeANannyPage extends Component {

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

      <Jumbotron className='p-5 m-0 bg-ahariGreyn' fluid>
        <ScrollableSection hash={'#why'} title="Why Work With Us?" exact>
            <span>
            <Container>
                  <h1 className='text-green'>
                      Why Work With Us?
                  </h1>
                  <p className='lead text-green'>
                      In order to secure a great job, you need an agency. And no agency does it like Ahari! We don’t just pick families simply because they applied, we have a strict application process for the families, so you can be sure that the families working with our agency are safe and have been properly vetted.
                  </p>
                  <h2 className='text-midnight'>Safety</h2>
                  <p className='lead text-midnight'>  There are so many risks involved with searching for nanny jobs on the internet, with so many whack jobs out there pretending to be what they’re not just to hurt people you can never be too careful. You will want to avoid such unfortunate situations, which is why Ahari is the perfect agency for you! We conduct thorough research on each of our prospective families, so you can be sure that any family we assign you to has been properly vetted and is completely safe.</p>
                  <h2 className='text-midnight'>We Put Your Interests First</h2>
                  <p className='lead text-midnight'>Finding a family that fits your requirements perfectly is not always easy, especially when you consider the number of families in search of childcare. We have been in this industry long enough to know that if the interest of the family and the nanny does not align, the relationship will not last. One of the biggest perks of working with us is probably the protection we offer. We will be your advocate in the course of your employment; always ready to represent your interest, how cool is that? We have a placement division whose job is to help the nannies and families create a great working relationship. We will also check in occasionally after the placement to ensure that the nannies are being treated fairly. So you can rest easy knowing that we’re watching out for you.</p>


                  <h2 className='text-midnight'>Better Pay & All Around Benefits</h2>
                  <p className='lead text-midnight'>
                    Our goal is to help our nannies attain their full potential. We will help you negotiate great salaries, with permanent placement.  Being a nanny can be quite lucrative as a lot of these placements come with great benefits like health insurance stipends, paid sick days, paid vacation, guaranteed hours and lots more. Ahari is here to ensure you don’t miss out on any of that.
                  </p>

                  <h2 className='text-midnight'>Stand Out</h2>
                  <p className='lead text-midnight'>
                    When you consider all the self-identified nannies around, you will understand the importance of having a reputable agency on your reference. Having Ahari on your resume will definitely make you stand out in an otherwise saturated industry.
                  </p>
            </Container>
            </span>
        </ScrollableSection>
      </Jumbotron>

      <Jumbotron className='p-0 bg-white'>

              <ScrollableSection hash={'#requirements'} title="Requirements" exact>
              <span>

                <Row className=''>
                  <Col className='d-flex justify-content-start'>
                  <img className='img-fluid' src={pic} />
                  </Col>
                  <Col className='d-flex justify-content-end'>
                        <Card className='border-0 pt-5 pb-5'>
                          <ListGroup className='border-0 '>
                            <ListGroupItem className='border-0 '>
                                <FaSquare className='text-starBurst'/> &nbsp; Must genuinely love working with children
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                                <FaSquare className='text-starBurst' /> &nbsp; Must have spent at least 3 years providing professional childcare services (2 of which must have been spent working for a private home as a nanny)
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Stellar references
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must be able to commit to a family for one year
                            </ListGroupItem>

                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must reside in New York City
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must possess a High School Diploma or College degree, (preferably with child/psychology-related coursework)
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must be legally qualified to work and reside in the U.S.
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must have sound knowledge of the English Language
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; No criminal record
                            </ListGroupItem>
                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must have first aid and CPR certification (or be willing to get the certification from your own pocket)
                            </ListGroupItem>


                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must be ready to be employed legally and paid through a payroll service
                            </ListGroupItem>

                            <ListGroupItem className='border-0 '>
                              <FaSquare className='text-starBurst' /> &nbsp; Must not be a smoker
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
