import React from "react";
import Card from "./Card";
import { Container } from "react-bootstrap";

function Cardswrap() {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cardswrap;
