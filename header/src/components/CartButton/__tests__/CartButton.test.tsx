import React from "react";
import { render, screen } from "@testing-library/react";
import { CartButton } from "..";
import userEvent from "@testing-library/user-event";

describe("CartButton Component", () => {
  const mockOnClick = jest.fn();

  it("should renders the cart button correctly", () => {
    render(<CartButton quantityItems="3" onClick={mockOnClick} />);

    const imgElement = screen.getByAltText("Cart logo");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "test-file-stub");

    const quantityElement = screen.getByText("3");
    expect(quantityElement).toBeInTheDocument();
  });

  it("should calls onClick when the button is clicked", async () => {
    render(<CartButton quantityItems="2" onClick={mockOnClick} />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should displays the correct quantity of items", () => {
    render(<CartButton quantityItems="5" onClick={mockOnClick} />);
    const quantityElement = screen.getByText("5");

    expect(quantityElement).toBeInTheDocument();
    expect(quantityElement.textContent).toBe("5");
  });
});
