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
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';


class NavTabs extends Component {

  nav(){
    const { section } = this.props;

    return (

      <header className="masthead mb-auto">
        <div className="inner d-flex justify-content-between">
          <h3 className="masthead-brand text-blush">Ahari</h3>
          <nav className="nav nav-masthead justify-content-center">


              <a className={classnames('nav-link', {active: section == 'mission'})} href="/home/mission">mission</a>
              <a className={classnames('nav-link', {active: section == 'be'})} href="/home/be">be a nanny</a>
              <a className={classnames('nav-link', {active: section == 'find'})} href="/home/find">find a nanny</a>
              <a className={classnames('nav-link', {active: section == 'find'})} href="/home/find">contact us</a>
          </nav>
        </div>
      </header>

    )
  }
  render() {
    const { section } = this.props;

    return (
          <div className="d-flex justify-content-between">
            <a href='#' style={{textDecoration: 'none'}}>
                <h3 className="masthead-brand text-blush">
                <ScrollableLink href='/home'>
                  <span>Ahari</span>
                </ScrollableLink>
                </h3>
            </a>

            <div className='d-flex justify-content-center'>
                <a className={classnames('nav-link', {active: section == 'mission'})} href="#">
                  <ScrollableLink href='/mission'>
                    <span>mission</span>
                  </ScrollableLink>
                </a>
                <a className={classnames('nav-link', {active: section == 'be'})} href="#">
                  <ScrollableLink href='/beANanny'>
                    <span>be a nanny</span>
                  </ScrollableLink>
                </a>

                <a className={classnames('nav-link', {active: section == 'find'})} href="#">
                  <ScrollableLink href='/findANanny'>
                    <span>find a nanny</span>
                  </ScrollableLink>
                </a>

                  <a className={classnames('nav-link', {active: section == 'contact'})}
                      href='#'
                  >
                  <ScrollableLink href='#contactUs'>
                    <span>contact us</span>
                  </ScrollableLink>
                  </a>

            </div>
          </div>
    );
  }
}


export default NavTabs;
