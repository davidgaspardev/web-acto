import { getByText, render } from "@testing-library/react";
import Page from "./page";
import { branches } from "@/helpers/data";
import exp from "constants";

describe("Branche page", () => {
  it("should render the Branche page", () => {
    render(<Page params={{
      branche: branches[0].slug
    }} />);

    const element = getByText(document.body, branches[0].name.toUpperCase());
    expect(element).toBeVisible();

    render(<Page params={{
      branche: "non-existing-branche"
    }} />);
    const notFoundElement = getByText(document.body, "Unidade não existente");
    expect(notFoundElement).toBeVisible();
  });
});
