import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <Fragment>
      {cards.map((cardDetails) => (
        <li key={cardDetails.id}>
          <Card
            imgSrc={cardDetails.src.large}
            largeImgSrc={cardDetails.src.large2x}
            photographer={cardDetails.photographer}
            photographer_url={cardDetails.photographer_url}
            avg_color={cardDetails.avg_color}
          />
        </li>
      ))}
    </Fragment>
  );
};

export default CardList;
