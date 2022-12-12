import Card from "../card/Card";
import cardBackImage from "../../assets/images/bg-card-back.png";
import { CardBackWrapper, CodeNumber } from "./card-back.styled";

const CardBack = () => {
  return (
    <CardBackWrapper>
      <Card imagePath={cardBackImage}>
        <CodeNumber>000</CodeNumber>
      </Card>
    </CardBackWrapper>
  );
};

export default CardBack;
