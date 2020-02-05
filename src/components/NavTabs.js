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
import classnames from 'classnames';

class NavTabs extends Component {


  render() {
    const { section } = this.props;

    return (

        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand text-blush">Ahari</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className={classnames('nav-link', {active: section == 'mission'})} href="/home/mission">mission</a>
              <a className={classnames('nav-link', {active: section == 'be'})} href="/home/be">be a nanny</a>
              <a className={classnames('nav-link', {active: section == 'find'})} href="/home/find">find a nanny</a>
              <a className={classnames('nav-link', {active: section == 'find'})} href="/home/find">contact us</a>
            </nav>
          </div>
        </header>

    );
  }
}


export default NavTabs;
