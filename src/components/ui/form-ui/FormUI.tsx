import { BaseComponentInterface } from "../../../interfaces/component-base";
import { FormUIStyles } from "./form-ui.styled";

const FormUI = ({ children }: BaseComponentInterface) => (
  <FormUIStyles>{children}</FormUIStyles>
);

export default FormUI;
