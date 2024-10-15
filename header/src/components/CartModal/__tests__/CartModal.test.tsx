import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartModal } from "..";
import { Product } from "root_app/interfaces";

const mockCloseModal = jest.fn();

const mockProducts: Product[] = [
  {
    id: 1,
    price: 10.5,
    thumbnail: "thumbnail.png",
    description: "Product 1",
    title: "Product 1",
  },
  {
    id: 2,
    price: 20.0,
    thumbnail: "thumbnail.png",
    description: "Product 2",
    title: "Product 2",
  },
];

describe("CartModal Component", () => {
  it("should renders the modal correctly when open", () => {
    render(
      <CartModal
        products={mockProducts}
        isOpen={true}
        closeModal={mockCloseModal}
      />
    );

    const productTitle1 = screen.getByText("Product 1");
    const productTitle2 = screen.getByText("Product 2");
    expect(productTitle1).toBeInTheDocument();
    expect(productTitle2).toBeInTheDocument();

    const totalValue = screen.getByText("Valor total da sua compra:");
    expect(totalValue).toBeInTheDocument();
    const formattedTotal = screen.getByText("R$ 30,50");
    expect(formattedTotal).toBeInTheDocument();
  });

  it("should displays not items selected text when there are no products", () => {
    render(
      <CartModal products={[]} isOpen={true} closeModal={mockCloseModal} />
    );

    const emptyMessage = screen.getByText(
      "Você não possui itens adicionados no seu carrinho."
    );
    expect(emptyMessage).toBeInTheDocument();
  });

  it("should calls closeModal when the close button is clicked", () => {
    render(
      <CartModal
        products={mockProducts}
        isOpen={true}
        closeModal={mockCloseModal}
      />
    );

    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });

  it("should renders the cancel and buy buttons when products exist", () => {
    render(
      <CartModal
        products={mockProducts}
        isOpen={true}
        closeModal={mockCloseModal}
      />
    );

    const cancelButton = screen.getByText("Cancelar");
    const buyButton = screen.getByText("Comprar");

    expect(cancelButton).toBeInTheDocument();
    expect(buyButton).toBeInTheDocument();
  });

  it("should does not render cancel and buy buttons when there are no products", () => {
    render(
      <CartModal products={[]} isOpen={true} closeModal={mockCloseModal} />
    );

    const cancelButton = screen.queryByText("Cancelar");
    const buyButton = screen.queryByText("Comprar");

    expect(cancelButton).not.toBeInTheDocument();
    expect(buyButton).not.toBeInTheDocument();
  });
});
