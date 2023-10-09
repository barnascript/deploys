import AboutContent from "./AboutContent";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("About details correctly displayed", () => {
  render(<AboutContent />);

  const aboutText = screen.getByText("We are all about building");
  expect(aboutText).toBeInTheDocument();
});
