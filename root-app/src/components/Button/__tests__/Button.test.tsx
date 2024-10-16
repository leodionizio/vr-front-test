import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "..";

jest.mock("../styles", () => ({
  Button: (props: any) => <button {...props} />,
}));

describe("Button Component", () => {
  it("should render the button with the correct text", () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  it("should apply props correctly to the button element", () => {
    render(<Button disabled={true}>Click Me</Button>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  it("should handle click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should render with the provided type attribute", () => {
    render(<Button type="submit">Submit</Button>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it("should pass down other props correctly", () => {
    render(<Button aria-label="custom-button">Click Me</Button>);

    const buttonElement = screen.getByLabelText("custom-button");
    expect(buttonElement).toBeInTheDocument();
  });
});
