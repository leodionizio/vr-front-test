import React from "react";
import { render, screen } from "@testing-library/react";
import { Wrapper } from "../";

jest.mock("../styles", () => ({
  Header: (props: any) => <header {...props} />,
  Content: (props: any) => <div {...props} />,
}));

describe("Wrapper Component", () => {
  it("should render the first child inside the Header", () => {
    render(
      <Wrapper>
        <h1>Header Content</h1>
        <p>First Content</p>
        <p>Second Content</p>
      </Wrapper>
    );

    const headerElement = screen.getByRole("heading", {
      name: /Header Content/i,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("should render the remaining children inside the Content", () => {
    render(
      <Wrapper>
        <h1>Header Content</h1>
        <p>First Content</p>
        <p>Second Content</p>
      </Wrapper>
    );

    const firstContent = screen.getByText("First Content");
    const secondContent = screen.getByText("Second Content");

    expect(firstContent).toBeInTheDocument();
    expect(secondContent).toBeInTheDocument();
  });

  it("should not render anything in Content if no additional children are provided", () => {
    render(
      <Wrapper>
        <h1>Header Content</h1>
      </Wrapper>
    );

    const contentElement = screen.queryByText(/First Content|Second Content/i);
    expect(contentElement).not.toBeInTheDocument();
  });
});
