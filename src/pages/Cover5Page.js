import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
//  import ScrollableAnchor, { configureAnchors } from '@fernando-msj/react-scrollable-anchor'
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';
import "../styles/index.scss";

import moment from 'moment';

import NavTabs from "../components/NavTabs";
import HomeSection from "../components/HomeSection";
import VisionSection from "../components/VisionSection";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import BeANannyBlurb from "../components/BeANannyBlurb";
import FindANannyBlurb from "../components/FindANannyBlurb";
import ContactUsSection from "../components/ContactUsSection";


class CoverPage extends Component {

  static contextTypes = {
     router: PropTypes.object
   };

  componentWillMount(){
    //  configureAnchors({});
  }
  render() {
    //  console.log(this.props.params);

    const { section } = this.props.params;
    let sections = {
      home: HomeSection,
      about: AboutSection,
      vision: VisionSection,
      mission: MissionSection
    }
    let Section = section ? sections[section] : HomeSection;
    return (
      <span>
      <Container style={{marginTop: "134px"}}>
          <Row>
            <Col className='d-flex justify-content-center'>
              <NavTabs section={section} />
            </Col>
          </Row>
      </Container>
        <Jumbotron className='p-0'>
          <ScrollableSection hash={'#home'} title="Home" exact>
              <HomeSection/>
          </ScrollableSection>
        </Jumbotron>
      <Container>
          <Row className='pt-5'>
            <Col className='d-flex justify-content-center'>
            <ScrollableSection hash={'#mission'} title="Mission" exact>
              <span>
                    <Container>
                    <p className='lead text-green'>
                      At Ahari we provide a personal, secure and devoted agency rooted in face-to-face relationships. Our passion is to be devoted to the families, children and nannies. We pride ourselves on making suitable matches and connections. Matches will be based on expectations, wants and desires set by both family and nannies. Each situation will be handled professionally with the utmost care, thoughtfulness and dedication.
                    </p>
                    </Container>
              </span>
            </ScrollableSection>
            </Col>
          </Row>
          <Row className='p-5'>
            <Col className='d-flex justify-content-center'>
                <CardDeck>
                      <ScrollableSection hash={'#findANanny'} title="Find A Nanny" exact>
                          <FindANannyBlurb />
                      </ScrollableSection>
                      <ScrollableSection hash={'#beANanny'} title="Find A Nanny" exact>
                          <BeANannyBlurb />
                      </ScrollableSection>
                </CardDeck>
            </Col>
          </Row>
          <Row className='p-5'>
            <Col className='d-flex justify-content-center'>
              <ScrollableSection hash={'#contactUs'} title="contact Us" exact>

                  <ContactUsSection />

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


export default CoverPage;
