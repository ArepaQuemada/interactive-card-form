import styled from "styled-components";
import { baseInputStyles } from "../../styles/base-input";

export const ButtonStyled = styled.button`
  ${baseInputStyles}
  background-color: ${(props) => props.theme.violet.very_dark};
  border-style: none;
  color: ${(props) => props.theme.white.default};
  font-size: 1rem;
`;
