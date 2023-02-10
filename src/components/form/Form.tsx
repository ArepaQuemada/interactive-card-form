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
import { useFormContext } from "../../hooks/useFormContext";
import { Fields } from "../../context/FormContext";
import { numericOnly } from "../../utils/numericOnly";

const Form = () => {
  const { updateContext } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nameKey = name as Fields;
    updateContext(nameKey, value);
  };

  return (
    <FormWrapper>
      <Input
        labelFor="cardholder name"
        autoComplete="off"
        onChange={handleChange}
        name="name"
      />
      <Input
        labelFor="card number"
        type="text"
        autoComplete="off"
        onChange={handleChange}
        name="cardNumber"
        inputMode="numeric"
        maxLength={16}
      />
      <DateAndCvC>
        <ExpDateDate>
          <Input
            labelFor="exp. date"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            name="expMonth"
            inputMode="numeric"
            maxLength={2}
          />
        </ExpDateDate>
        <MonthYear>
          <Input
            labelFor="(mm / yy)"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            name="expYear"
            inputMode="numeric"
            maxLength={2}
          />
        </MonthYear>
        <CvcWrapper>
          <Input
            labelFor="cvc"
            type="text"
            autoComplete="off"
            name="cvc"
            maxLength={3}
            inputMode="numeric"
            onChange={handleChange}
          />
        </CvcWrapper>
      </DateAndCvC>
      <Button name="confirm">Confirm</Button>
    </FormWrapper>
  );
};

export default Form;
