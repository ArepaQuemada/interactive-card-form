import React from "react";
import { ButtonStyled } from "./button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  children: string;
}

/**
 * TODO
 * Agregar hover state
 */
function Button({ name, children, ...rest }: ButtonProps) {
  return (
    <ButtonStyled name={name} {...rest}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
