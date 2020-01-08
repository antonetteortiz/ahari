import React, { Component } from 'react';
import { Col, Collapse, Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown

 } from 'reactstrap';
//  import "../styles/carousel.css";
import moment from 'moment';

import NavTabs from "../components/NavTabs";
import HomeSection from "../components/HomeSection";
import VisionSection from "../components/VisionSection";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import BeANannySection from "../components/BeANannySection";
import FindANannySection from "../components/FindANannySection";

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
      <Container>
          <Row>
            <Col className='col-md-10 offset-md-2'>
              <NavTabs section={section} />
            </Col>
          </Row>
          <Row className='p-5'>
            <Col className='col-md-10 offset-md-2'>
                  <Container>
                    <Section />
                  </Container>
            </Col>
          </Row>
          <Row className='fixed-bottom' >
            <Col className='col-md-10 offset-md-2'>
            <footer className="mastfoot">
              <div className="inner">
                <p>&#169; {moment().format('YYYY')} Ahari Nannies | All Rights Reserved</p>
              </div>
            </footer>
            </Col>
          </Row>
      </Container>
    );
  }
}


export default CoverPage;
