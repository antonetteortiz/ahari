import React, { Component } from 'react';
import { Button, Col, Collapse, Container,
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
import classnames from 'classnames';
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';
import logo from '../../images/ahariWebLogo.png';

class NavTabs extends Component {


  render() {
    const { section } = this.props;

    return (

          <div className="fixed-top bg-white">


                  <div className='d-flex justify-content-center'>
                  <a href='/' style={{textDecoration: 'none'}}>
                      <h3 className="masthead-brand text-blush">
                          <img src={logo} altText='Ahari' />
                      </h3>
                  </a>
                      <Button color='link' className={classnames('nav-link', {active: section == 'mission'})}>
                        <ScrollableLink href='#why'>
                            <h5 className='text-green'>why work with us</h5>
                        </ScrollableLink>
                      </Button>
                      <Button color='link' className={classnames('nav-link', {active: section == 'be'})}>
                        <ScrollableLink href='#requirements'>
                          <h5 className='text-green'>fees</h5>
                        </ScrollableLink>
                      </Button>

                      <Button color='link' className={classnames('nav-link', {active: section == 'find'})}>
                        <ScrollableLink href='#application'>
                          <h5 className='text-green'>placement application</h5>
                        </ScrollableLink>
                      </Button>

                  </div>
          </div>
    );
  }
}


export default NavTabs;
