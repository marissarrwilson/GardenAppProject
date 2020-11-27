import React from "react";

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
    <div className="card" style={{ width: "18rem" }}>
      <h5 className="card-title"><li>Title here{props.Posttitle}</li></h5>
      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
      <div className="card-body">
      <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <p className="card-text">
          Planted on {props.DatePlanted} over {props.SqFootage}
          sq. ft.
        </p>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.{props.CropStatus}
        </p>
              
        <p className="card-text">Some quick example text to build on the card title and make up the
          bulk of the card's content.{props.fielnotes}</p>
        <a href="/Details" className="btn btn-primary">
          {props.FieldNotes}button here later change
        </a>
      </div>
    </div>
  );
}

export default Card;
