import { getAllByAltText, getByAltText, render } from "@testing-library/react"
import { Footer } from "./Footer"

describe("Footer", () => {
  it("should render the Footer component", () => {
    render(<Footer />);

    const allAltTexts = getAllByAltText(document.body, /share/i);
    expect(allAltTexts).toHaveLength(4);
  })
})
