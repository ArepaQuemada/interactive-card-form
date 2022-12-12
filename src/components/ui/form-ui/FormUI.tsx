import { BaseComponentInterface } from "../../../interfaces/component-base";
import { BasePadding } from "../../../styles/base-padding";
import { FormUIStyles } from "./form-ui.styled";

const FormUI = ({ children }: BaseComponentInterface) => (
  <FormUIStyles>
    <BasePadding>{children}</BasePadding>
  </FormUIStyles>
);

export default FormUI;
