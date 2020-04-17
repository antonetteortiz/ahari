import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
 Alert, Button, Card, CardBody, CardFooter, CardImg, CardText
} from 'reactstrap';

import findAnannyPic from "../images/african-american-father-holding-his-little-daughters-feet-african-american-father-holding-his-daughters-feet-107471075.jpg";

class FindANannyBlurb extends Component {

  static contextTypes = {
     router: PropTypes.object
   };

  render() {

    return (

      <Card>
        <CardImg top width="100%" src={findAnannyPic} alt="Card image cap" />
        <CardBody>
          <CardText>Just breathe, we can take it from here. Our unique agency will help you find the perfect nanny to fit your family!</CardText>
        </CardBody>
        <CardFooter className='bg-white border-0'>
            <Button color='teal'
              onClick={()=> this.context.router.push(`/find`)}
            >
              Find a Nanny
            </Button>
        </CardFooter>
      </Card>
    );
  }
}


export default FindANannyBlurb;
