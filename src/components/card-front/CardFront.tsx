import React from "react";
import Card from "../card/Card";
import cardFrontImage from "../../assets/images/bg-card-front.png";
import {
  CardFrontWrapper,
  CircleSvg,
  DateAndNameWrapper,
  NumberSection,
  SmallSection,
  CardNumber,
} from "./card-front.styled";
import svg from "../../assets/images/card-logo.svg";

const CardFront = () => {
  return (
    <CardFrontWrapper>
      <Card imagePath={cardFrontImage}>
        <CircleSvg src={svg} />
        <NumberSection>
          <CardNumber>0000 0000 0000 0000</CardNumber>
        </NumberSection>
        <DateAndNameWrapper>
          <SmallSection>JUAN RIGUAL</SmallSection>
          <SmallSection>00/00</SmallSection>
        </DateAndNameWrapper>
      </Card>
    </CardFrontWrapper>
  );
};

export default CardFront;
