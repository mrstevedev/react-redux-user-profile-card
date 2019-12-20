import React from "react";

const CardAboutTop = ({ aboutOne, aboutTwo }) => {
  return (
    <div className="card-about-container">
      <div className="card-about-container-inside-border-bottom">
        <div className="about-me">
          <p dangerouslySetInnerHTML={{ __html: aboutOne }} />
        </div>
        <div className="about-me">
        <p dangerouslySetInnerHTML={{ __html: aboutTwo}} />
        </div>
      </div>
    </div>
  );
};

export default CardAboutTop;
