import styled from "styled-components";
import { baseInputStyles } from "../../styles/base-input";

export const InputStyled = styled.input`
  ${baseInputStyles}
  border: 1px solid ${({ theme }) => `${theme.violet.light}`};
`;

export const LabelStyled = styled.label`
  display: block;
`;
