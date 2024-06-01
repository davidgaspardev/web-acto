import { fireEvent, render, screen } from "@testing-library/react";
import Plans from "./Plans";
import { branches } from "@/helpers/data";

describe("Plans", () => {
  it("should render the Plans component", () => {
   for (const branche of branches) {
      render(<Plans data={branche} />)

      const element = screen.getByText(branche.name.toUpperCase());
      expect(element).toBeVisible();

      const buttonsIWant = screen.getAllByText("Saber mais");
      for (const button of buttonsIWant) {
        expect(button).toBeVisible();

        const whatsappLink = button.getAttribute("href");
        expect(whatsappLink).toContain("https://wa.me/");

        fireEvent.click(button);
      }
    }
  });
});
