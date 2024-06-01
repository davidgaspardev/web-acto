import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render the Header component", () => {
    render(<Header />)
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });
});
