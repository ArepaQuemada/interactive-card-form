import React from "react";
import Card from "../card/Card";
import cardFrontImage from "../../assets/images/bg-card-front.png";
import { CardFrontWrapper } from "./card-front.styled";

const CardFront = () => {
  return (
    <CardFrontWrapper>
      <Card imagePath={cardFrontImage}></Card>
    </CardFrontWrapper>
  );
};

export default CardFront;
