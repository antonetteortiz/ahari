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


class NavTabs extends Component {


  render() {
    const { section } = this.props;

    return (

          <div className="fixed-top bg-white">


                  <div className='d-flex justify-content-center'>
                  <a href='/' style={{textDecoration: 'none'}}>
                      <h3 className="masthead-brand text-blush">
                        <span>Ahari</span>
                      </h3>
                  </a>
                      <Button color='link' className={classnames('nav-link', {active: section == 'mission'})}>
                        <ScrollableLink href='#why'>
                          <span>why work with us</span>
                        </ScrollableLink>
                      </Button>
                      <Button color='link' className={classnames('nav-link', {active: section == 'be'})}>
                        <ScrollableLink href='#requirements'>
                          <span>requirements</span>
                        </ScrollableLink>
                      </Button>

                      <Button color='link' className={classnames('nav-link', {active: section == 'find'})}>
                        <ScrollableLink href='#application'>
                          <span>apply to be a nanny</span>
                        </ScrollableLink>
                      </Button>

                  </div>
          </div>
    );
  }
}


export default NavTabs;
