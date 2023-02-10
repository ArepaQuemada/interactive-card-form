import { ReactNode, createContext, useState } from "react";

export type Fields = "name" | "cardNumber" | "expMonth" | "expYear" | "cvc";

export interface IFormContext {
  context: {
    [key in Fields]: string;
  };
  updateContext: (field: Fields, value: string) => void;
}

const initalValues = {
  context: {
    cardNumber: "000000000000",
    cvc: "000",
    expMonth: "01",
    expYear: "27",
    name: "John Doe",
  },
};

export const FormContext = createContext<IFormContext | null>(null);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [{ context }, setContext] = useState(initalValues);

  const updateContext = (field: Fields, value: string) => {
    setContext((prev) => ({
      ...prev,
      context: {
        ...prev.context,
        [field]: value,
      },
    }));
  };
  return (
    <FormContext.Provider value={{ updateContext, context }}>
      {children}
    </FormContext.Provider>
  );
};
