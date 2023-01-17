import React from "react";
import { InputStyled, LabelStyled } from "./input-styled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelFor: string;
}

/**
 * TODO
 * add error styles and message
 */
const Input = ({ labelFor, ...rest }: InputProps) => {
  return (
    <div>
      <LabelStyled htmlFor={labelFor}>
        {labelFor.toLocaleUpperCase()}
      </LabelStyled>
      <InputStyled id={labelFor} {...rest} />
    </div>
  );
};

export default Input;
