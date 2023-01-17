// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    white: {
      default: string;
    };
    violet: {
      light: "hsl(270, 3%, 87%)";
      dark: "hsl(279, 6%, 55%)";
      very_dark: "hsl(278, 68%, 11%)";
    };
  }
}
