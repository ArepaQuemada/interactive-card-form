import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw Error("Context should be used with Provider");
  return context;
};
