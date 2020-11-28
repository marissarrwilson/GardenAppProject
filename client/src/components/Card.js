import React from "react";
import "./Card.css";

function Card(props) {

  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src={props.image} className="card-img-top" alt="Plant" />
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
