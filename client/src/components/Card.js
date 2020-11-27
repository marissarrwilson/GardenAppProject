import React from "react";
import "./Card.css";

// Post Title (is this required???)
// Crop Status
// Square Footage
// Quantity
// Harvest Weight
// Date Started
// Date Planted
// Date Harvested
// Field Notes

function Card(props) {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img src="https://picsum.photos/200/150" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{props.title}New Title</h3>

        <p className="plantName">
          Crop Planted: {props.plantName}
        </p>

        <p className="card-text">
          Planted on {props.datePlanted}__ over {props.sqFootage}__
          sq.ft.
        </p>

        <p className="card-text">Status: {props.status}</p>

        <p className="card-text">
          Field Notes: {props.fieldNotes}
        </p>

        <div className="row">
          <a href="/post" className="btn btn-success col-5">
            {props.viewdetails} Edit Post
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
