import Card from "../card/Card";
import cardBackImage from "../../assets/images/bg-card-back.png";
import { CardBackWrapper } from "./card-back.styled";

const CardBack = () => {
  return (
    <CardBackWrapper>
      <Card imagePath={cardBackImage} />
    </CardBackWrapper>
  );
};

export default CardBack;
