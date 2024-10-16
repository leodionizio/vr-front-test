import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "../";

jest.mock("../styles", () => ({
  Card: (props: any) => <div {...props} />,
}));

describe("Card Component", () => {
  it("should render the Card component with children", () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );

    const cardElement = screen.getByText("Test content");
    expect(cardElement).toBeInTheDocument();
  });

  it("should apply data-cy attribute", () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );

    const cardContainer = screen.getByTestId("card");
    expect(cardContainer).toBeInTheDocument();
  });
});
