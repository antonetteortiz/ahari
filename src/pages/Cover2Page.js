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

class CoverPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  navBar(){
    return (
      <Navbar color="white" light expand="md">
       <NavbarBrand href="/">ahari</NavbarBrand>
       <NavbarToggler onClick={this.toggle} />
       <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">vision</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">be a nanny</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">find a nanny</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">why work with an agency</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

  render() {

    return (
      <Container>
          <Row>
            <Col className='col-md-10 offset-md-2'>
            <header className="masthead mb-auto">
              <div className="inner">
                <h3 className="masthead-brand text-white">Ahari</h3>
                <nav className="nav nav-masthead justify-content-center">
                  <a className="nav-link active" href="#">home</a>
                  <a className="nav-link" href="#">about</a>
                  <a className="nav-link" href="/vision">vision</a>
                  <a className="nav-link" href="#">mission</a>
                  <a className="nav-link" href="#">be a nanny</a>
                  <a className="nav-link" href="#">find a nanny</a>
                </nav>
              </div>
            </header>
            </Col>
          </Row>
          <Row className='p-5'>
            <Col className='col-md-10 offset-md-2'>
                  <Container>
                  <main role="main" className="inner cover">
                    <h1 className="cover-heading text-white">Ahari Nannies</h1>
                    <p className="lead text-white">Ahari is a booking platform that helps to connect parents and qualified caregivers. Offering training for caregivers to help futher their passions in providing quality and professional care.</p>
                    <p className="lead text-white">
                      <a href="/vision" className="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                  </main>
                  </Container>
            </Col>
          </Row>
          <Row className='fixed-bottom' >
            <Col className='col-md-10 offset-md-2'>
            <footer className="mastfoot mt-auto">
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
