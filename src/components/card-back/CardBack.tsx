import Card from "../card/Card";
import cardBackImage from "../../assets/images/bg-card-back.png";
import { CardBackWrapper, CodeNumber } from "./card-back.styled";
import { useFormContext } from "../../hooks/useFormContext";

const CardBack = () => {
  const {
    context: { cvc },
  } = useFormContext();
  return (
    <CardBackWrapper>
      <Card imagePath={cardBackImage}>
        <CodeNumber>{cvc}</CodeNumber>
      </Card>
    </CardBackWrapper>
  );
};

export default CardBack;
