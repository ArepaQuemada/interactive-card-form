import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import {
  CvcWrapper,
  DateAndCvC,
  ExpDateDate,
  FormWrapper,
  MonthYear,
} from "./form.styled";

const Form = () => {
  return (
    <FormWrapper>
      <Input labelFor="cardholder name" autoComplete="off" />
      <Input labelFor="card number" type="number" autoComplete="off" />
      <DateAndCvC>
        <ExpDateDate>
          <Input labelFor="exp. date" type="number" autoComplete="off" />
        </ExpDateDate>
        <MonthYear>
          <Input labelFor="(mm / yy)" type="number" autoComplete="off" />
        </MonthYear>
        <CvcWrapper>
          <Input labelFor="cvc" type="number" autoComplete="off" />
        </CvcWrapper>
      </DateAndCvC>
      <Button name="confirm">Confirm</Button>
    </FormWrapper>
  );
};

export default Form;
