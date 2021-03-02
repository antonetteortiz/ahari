import React, { Component } from "react";
// import PropTypes from "prop-types";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
} from "reactstrap";

//  import beAnannyPic from "../images/mother-children-playing-building-blocks-bedroom-93540028.jpg";
import beAnannyPic from "../images/ahari6.jpg";
import { useHistory } from "react-router-dom";


  function BeANannyBlurb(){
    const history = useHistory()
    return (
      <Card id="beANanny">
        <CardImg top width="100%" src={beAnannyPic} alt="Card image cap" />
        <CardBody>
          <CardText>
            Nannies with a caring and loving heart. Start your journey with us!
          </CardText>
        </CardBody>
        <CardFooter className="bg-white border-0">
        {/* history.push */}
          <Button color="teal" onClick={() => history.push(`/be`)}>
            Be a Nanny
          </Button>
        </CardFooter>
      </Card>
    );
}

export default BeANannyBlurb;
