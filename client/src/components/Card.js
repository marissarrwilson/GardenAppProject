import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={props.image} className="card-img-top" alt="Plant image" />
      <div className="card-body">
        <h3 className="card-title"><bold>{props.title}</bold></h3>

        <p className="plantName">
          Crop Planted: {props.name}
        </p>

        <p className="card-text">
          Planted on {props.datePlanted} over {props.sqft}
          sq.ft.
        </p>

        <p className="card-text">Status: {props.status}</p>

        <p className="card-text">
          Field Notes: {props.description}
        </p>

        <div className="row">
          <a href="/post" className="btn btn-success col-5">
           Edit Post
          </a>

          <div className="col-2"></div>

          <a href="/feed" className="btn btn-danger">
            {props.viewdetails} Delete
          </a>

        </div>
        
      </div>
    </div>
  );
}

export default Card;
