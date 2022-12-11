import { BaseComponentInterface } from "./component-base";

export interface CardInterface extends BaseComponentInterface {
  position: {
    at: number;
    type: "top" | "bottom";
  };
  zIndex: number;
  imagePath: string;
}
