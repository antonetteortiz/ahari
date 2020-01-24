import React, { Component } from 'react';
import { Col, Collapse, Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  //  NavbarText,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown

 } from 'reactstrap';
//  import "../styles/carousel.css";
import moment from 'moment';
import classnames from 'classnames';

class NavTabs extends Component {

  old(){
    const { section } = this.props;

      return (
        <header className="masthead mb-5 fixed-top pb-2 bg-white">
          <div className="inner">
            <h3 className="masthead-brand text-blush">Ahari</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className={classnames('nav-link text-teal', {active: section == 'about'})} href="/home/about">about</a>
              <a className={classnames('nav-link text-teal', {active: section == 'be'})} href="/home/be">be a nanny</a>
              <a className={classnames('nav-link text-teal', {active: section == 'find'})} href="/home/find">find a nanny</a>
              <a className={classnames('nav-link text-teal', {active: section == 'contact'})} href="/home/contact">contact</a>
            </nav>
          </div>
        </header>
      );
  }
  render() {
    const { section } = this.props;
    const toggle = null;
    const isOpen = null;

    return (
      <Navbar color="light" light expand="md">
             <NavbarBrand href="/">reactstrap</NavbarBrand>
             <NavbarToggler onClick={toggle} />
             <Collapse isOpen={isOpen} navbar>
               <Nav className="mr-auto" navbar>
                 <NavItem>
                   <NavLink href="/components/">Components</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                 </NavItem>
                 <UncontrolledDropdown nav inNavbar>
                   <DropdownToggle nav caret>
                     Options
                   </DropdownToggle>
                   <DropdownMenu right>
                     <DropdownItem>
                       Option 1
                     </DropdownItem>
                     <DropdownItem>
                       Option 2
                     </DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>
                       Reset
                     </DropdownItem>
                   </DropdownMenu>
                 </UncontrolledDropdown>
               </Nav>
             </Collapse>
           </Navbar>


    );
  }
}


export default NavTabs;
