import React from "react";
import Card from "../components/Card";
import { Container } from "react-bootstrap";
import "./Feed.css"

function Feed() {
  return (
    <div className="wrapper">
      <Container>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card>

            </Card>
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

export default Feed;
