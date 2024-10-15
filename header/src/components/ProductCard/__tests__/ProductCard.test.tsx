import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "..";
import { Product } from "root_app/interfaces";

const mockProduct: Product = {
  id: 1,
  price: 99.99,
  thumbnail: "thumbnail.png",
  description: "A sample product",
  title: "Sample Product",
};

describe("ProductCard Component", () => {
  it("should renders the product details correctly", () => {
    render(<ProductCard product={mockProduct} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockProduct.thumbnail);

    const titleElement = screen.getByText(mockProduct.title);
    expect(titleElement).toBeInTheDocument();

    const priceElement = screen.getByText("R$ 99,99");
    expect(priceElement).toBeInTheDocument();
  });

  it("should displays the correct formatted price in BRL", () => {
    render(<ProductCard product={mockProduct} />);

    const priceElement = screen.getByText("R$ 99,99");
    expect(priceElement).toBeInTheDocument();
  });

  it("should renders the product image with correct alt text", () => {
    render(<ProductCard product={mockProduct} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", mockProduct.thumbnail);
  });
});
