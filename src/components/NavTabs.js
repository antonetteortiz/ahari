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
import logo from '../images/ahariWebLogo.png';

class NavTabs extends Component {


  render() {
    const { section } = this.props;

    return (

          <div className="fixed-top bg-white">


                  <div className='d-flex justify-content-center align-items-center'>
                  <a href='#' style={{textDecoration: 'none'}}>
                      <h3 className="masthead-brand text-blush">
                      <ScrollableLink href='#home'>
                      <h3 className="masthead-brand text-blush">
                          <img src={logo} altText='Ahari' />
                      </h3>
                      </ScrollableLink>
                      </h3>
                  </a>
                      <Button color='link' className={classnames('nav-link', {active: section == 'mission'})}>
                        <ScrollableLink href='#mission'>
                          <h5 className='text-green'>mission</h5>
                        </ScrollableLink>
                      </Button>
                      <Button color='link' className={classnames('nav-link', {active: section == 'be'})}>
                        <ScrollableLink href='#beANanny'>
                          <h5 className='text-green'>be a nanny</h5>
                        </ScrollableLink>
                      </Button>

                      <Button color='link' className={classnames('nav-link', {active: section == 'find'})}>
                        <ScrollableLink href='#findANanny'>
                          <h5 className='text-green'>find a nanny</h5>
                        </ScrollableLink>
                      </Button>

                        <Button color='link' className={classnames('nav-link', {active: section == 'contact'})}

                        >
                        <ScrollableLink href='#contactUs'>
                          <h5 className='text-green'>contact us</h5>
                        </ScrollableLink>
                        </Button>

                  </div>
          </div>
    );
  }
}


export default NavTabs;
