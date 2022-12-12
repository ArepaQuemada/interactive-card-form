import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { BaseComponentInterface } from "../interfaces/component-base";
import { theme } from "./theme";

const ThemeProvider = ({ children }: BaseComponentInterface) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
