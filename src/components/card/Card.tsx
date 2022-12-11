import { CardInterface } from "../../interfaces/card";
import { BaseComponentInterface } from "../../interfaces/component-base";
import { BaseCardWrapper, Image, ImageContainer } from "./card.styled";

interface CardProps extends BaseComponentInterface {
  imagePath: string;
}

const Card = ({ children, imagePath }: CardProps) => {
  return (
    <BaseCardWrapper>
      <ImageContainer>
        {children}
        <Image src={imagePath} alt="card image" />
      </ImageContainer>
    </BaseCardWrapper>
  );
};

export default Card;
