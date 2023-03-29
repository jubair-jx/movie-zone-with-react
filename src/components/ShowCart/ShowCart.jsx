import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowCart = (props) => {
  const { handlebtns } = props;

  const { movieName, description, poster, watchTime, imdbRating } = props.movie;

  return (
    <div className="col-md-6">
      <div className="card">
        <img
          src={poster}
          className="card-img-top "
          alt="..."
          style={{ height: "450px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{movieName}</h5>
          <p className="card-text">{description}</p>
          <div className=" d-flex justify-content-around">
            <p>Watch time : {watchTime}</p>
            <p>Rating :{imdbRating} </p>
          </div>

          <a
            className="btn btn-primary w-100"
            onClick={() => {
              handlebtns(watchTime);
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
