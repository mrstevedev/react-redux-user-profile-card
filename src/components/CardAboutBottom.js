import React from "react";

const CardAboutBottom = ({ name, location }) => {
  return (
    <div className="card-about-container-bottom">
      <div className="card-about-bottom">
        <div>Name</div>
        <div>{name}</div>
      </div>
      <div className="card-about-bottom">
        <div>Location</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default CardAboutBottom;
