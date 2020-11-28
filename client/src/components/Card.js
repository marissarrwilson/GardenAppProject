import React from "react";
import "./Card.css";

function Card(props) {

  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={props.image} className="card-img-top" alt="Plant" />
      <div className="card-body">
        <h3 className="card-title"><bold>{props.title}</bold></h3>

        <p className="plantName">
          <bold>Crop Planted:</bold> {props.name}
        </p>

        <p className="card-text">
          <bold>Planted on</bold> {props.datePlanted} <bold>over</bold> {props.sqft}
           <bold>sq.ft.</bold>
        </p>

        <p className="card-text"><bold>Status:</bold> {props.status}</p>

        <p className="card-text">
          <bold>Field Notes:</bold> {props.description}
        </p>

        <div className="row">
          <p className="btn btn-success col-5">
           Edit Post
          </p>

          <div className="col-2"></div>

          <p onClick={props.function} className="btn btn-danger">
            Delete
          </p>

        </div>
        
      </div>
    </div>
  );
}

export default Card;
