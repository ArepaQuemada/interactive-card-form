import { render } from "@testing-library/react";
import ThemeProvider from "../theme/Provider";

const renderHelper = (Component: JSX.Element, additionalOptions?: any) =>
  render(<ThemeProvider>{Component}</ThemeProvider>);

export default renderHelper;
