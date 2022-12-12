import App from "./App";
import { screen } from "@testing-library/react";
import renderHelper from "./utils/renderHelper";

test("Renders App", () => {
  renderHelper(<App></App>);
  expect(screen.getByText(/Form/i)).toBeInTheDocument();
});
