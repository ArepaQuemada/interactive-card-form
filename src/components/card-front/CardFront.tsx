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
import { useFormContext } from "../../hooks/useFormContext";
import { getCardFormatted } from "../../utils/formatContext";

const CardFront = () => {
  const {
    context: { cardNumber, expMonth, expYear, name },
  } = useFormContext();

  const cardNumberFormatted = getCardFormatted(cardNumber);

  return (
    <CardFrontWrapper>
      <Card imagePath={cardFrontImage}>
        <CircleSvg src={svg} />
        <NumberSection>
          <CardNumber>{cardNumberFormatted}</CardNumber>
        </NumberSection>
        <DateAndNameWrapper>
          <SmallSection>{name.toLocaleUpperCase()}</SmallSection>
          <SmallSection>
            {expMonth}/{expYear}
          </SmallSection>
        </DateAndNameWrapper>
      </Card>
    </CardFrontWrapper>
  );
};

export default CardFront;
