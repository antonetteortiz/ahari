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
      <span className='m-0 p-0'>
          <Row>
            <Col>
            <header className="masthead mb-auto">
              <div className="inner">
                <h3 className="masthead-brand">Ahari</h3>
                <nav className="nav nav-masthead justify-content-center">
                  <a className="nav-link active" href="#">home</a>
                  <a className="nav-link" href="#">about</a>
                  <a className="nav-link" href="#">vision</a>
                  <a className="nav-link" href="#">mission</a>
                  <a className="nav-link" href="#">be a nanny</a>
                  <a className="nav-link" href="#">find a nanny</a>
                </nav>
              </div>
            </header>
            </Col>
          </Row>
          <Row>
            <Col>
                  <Container>
                  <main role="main" className="inner cover">
                    <h1 className="cover-heading">Cover your page.</h1>
                    <p className="lead">Ahari is a booking platform that helps to connect parents and qualified caregivers. Offering training for caregivers to help futher their passions in providing quality and professional care.</p>
                    <p className="lead">
                      <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                  </main>
                  </Container>
            </Col>
          </Row>
          <Row>
            <Col>
            <footer className="mastfoot mt-auto">
              <div className="inner">
                <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
              </div>
            </footer>
            </Col>
          </Row>
      </span>
    );
  }
}


export default CoverPage;
