import React, { Component } from 'react';

class HomeSection extends Component {


  render() {
    const section = 'home';
    return (

      <main role="main" className="inner cover">
        <h1 className="cover-heading text-white">Ahari Nannies</h1>
        <p className="lead text-white">Ahari is a booking platform that helps to connect parents and qualified caregivers. Offering training for caregivers to help futher their passions in providing quality and professional care.</p>
        <p className="lead text-white">
          <a href="/home/vision" className="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>

    );
  }
}


export default HomeSection;
