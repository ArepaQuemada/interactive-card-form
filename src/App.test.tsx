import App from "./App";
import { screen, render } from "@testing-library/react";

test("Renders App", () => {
  render(<App></App>);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
