import { CardInterface } from "../../interfaces/card";
import { BaseComponentInterface } from "../../interfaces/component-base";
import { BaseCardWrapper, Image, ImageContainer } from "./card.styled";

interface CardProps extends BaseComponentInterface {
  imagePath: string;
}

const Card = ({ children, imagePath }: CardProps) => {
  return (
    <BaseCardWrapper>
      <ImageContainer imagePath={imagePath}>
        <div>{children}</div>
      </ImageContainer>
    </BaseCardWrapper>
  );
};

export default Card;
