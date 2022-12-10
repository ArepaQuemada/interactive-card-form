import { BaseComponentInterface } from "../../../interfaces/component-base";
import { CardUIStyles } from "./card-ui.styles";

const CardUI = ({ children }: BaseComponentInterface) => (
  <CardUIStyles>{children}</CardUIStyles>
);

export default CardUI;
