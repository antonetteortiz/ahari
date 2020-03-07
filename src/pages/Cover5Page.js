import React, { Component } from 'react';
import { Button,
  Card, CardBody, CardDeck, CardFooter, CardImg, CardText, CardTitle,
  Col, Collapse, Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown

 } from 'reactstrap';

import "../styles/index.scss";

import moment from 'moment';

import NavTabs from "../components/NavTabs";
import HomeSection from "../components/HomeSection";
import VisionSection from "../components/VisionSection";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import BeANannySection from "../components/BeANannySection";
import FindANannySection from "../components/FindANannySection";
import ContactUsSection from "../components/ContactUsSection";

import findAnannyPic from "../images/african-american-father-holding-his-little-daughters-feet-african-american-father-holding-his-daughters-feet-107471075.jpg";
import beAnannyPic from "../images/mother-children-playing-building-blocks-bedroom-93540028.jpg";

class CoverPage extends Component {


  render() {
    console.log(this.props.params);

    const { section } = this.props.params;
    let sections = {
      home: HomeSection,
      about: AboutSection,
      vision: VisionSection,
      mission: MissionSection,
      be: BeANannySection,
      find: FindANannySection
    }
    let Section = section ? sections[section] : HomeSection;
    return (
      <span>
      <Container>
          <Row>
            <Col className='d-flex justify-content-center'>
              <NavTabs section={section} />
            </Col>
          </Row>
      </Container>
      <Jumbotron className='p-1'>
        <HomeSection/>
      </Jumbotron>
      <Container>
          <Row className='pt-5'>
            <Col className='d-flex justify-content-center'>
                <Container>
                <p className='lead text-green'>
                  At Ahari we provide a personal, secure and devoted agency rooted in face-to-face relationships. Our passion is to be devoted to the families, children and nannies. We pride ourselves on making suitable matches and connections. Matches will be based on expectations, wants and desires set by both family and nannies. Each situation will be handled professionally with the utmost care, thoughtfulness and dedication.
                </p>
                </Container>
            </Col>
          </Row>
          <Row className='p-5'>
            <Col className='d-flex justify-content-center'>
                <CardDeck>
                      <Card>
                        <CardImg top width="100%" src={findAnannyPic} alt="Card image cap" />
                        <CardBody>
                          <CardText>Just breathe, we can take it from here. Our unique agency will help you find the perfect nanny to fit your family!</CardText>
                        </CardBody>
                        <CardFooter className='bg-white border-0'>
                            <Button color='teal'>Find a Nanny</Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardImg top width="100%" src={beAnannyPic} alt="Card image cap" />
                        <CardBody>
                          <CardText>Nannies with a caring and loving heart. Start your journey with us!</CardText>
                        </CardBody>
                        <CardFooter className='bg-white border-0'>
                          <Button color='teal'>Be a Nanny</Button>
                        </CardFooter>
                      </Card>
                </CardDeck>
            </Col>
          </Row>
          <Row className='p-5'>
            <Col className='d-flex justify-content-center'>
              <ContactUsSection />
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


export default CoverPage;
