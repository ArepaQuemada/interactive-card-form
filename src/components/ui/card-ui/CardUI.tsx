import { BaseComponentInterface } from "../../../interfaces/component-base";
import { BasePadding } from "../../../styles/base-padding";
import { CardUIStyles } from "./card-ui.styles";

const CardUI = ({ children }: BaseComponentInterface) => (
  <CardUIStyles>
    <BasePadding>{children}</BasePadding>
  </CardUIStyles>
);

export default CardUI;
