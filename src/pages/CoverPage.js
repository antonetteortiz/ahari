import React, { Component } from 'react';
import { Col, Collapse, Container, Row,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
import "../styles/cover.css";

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

  renderOther(){
    return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">Cover</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </footer>
      </div>

    )
  }

  render() {


    return (



      <Container className='text-center m-25 w-100'>

        <Navbar color="white" className='w-100' light expand="md">
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
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
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

          <Container>
          <main role="main" className="inner cover">
            <h1 className="cover-heading">Cover your page.</h1>
            <p className="lead">Ahari is a booking platform that helps to connect parents and qualified caregivers. Offering training for caregivers to help futher their passions in providing quality and professional care.</p>
            <p className="lead">
              <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
            </p>
          </main>
          </Container>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            </div>
          </footer>
          </div>

      </Container>

    );
  }
}


export default CoverPage;
