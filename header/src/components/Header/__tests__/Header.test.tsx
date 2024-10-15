import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "..";
import { Provider } from "react-redux";
import { RootState } from "root_app/store";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore([]);
const mockCart = {
  products: [
    { id: 1, title: "Product 1", price: 10 },
    { id: 2, title: "Product 2", price: 20 },
  ],
};
const mockProducts = [
  { id: 1, title: "Product 1", price: 10, thumbnail: "thumbnail1.png" },
  { id: 2, title: "Product 2", price: 20, thumbnail: "thumbnail2.png" },
];

describe("Header Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    const initialState: RootState = {
      cart: mockCart,
      products: mockProducts,
    };
    store = mockStore(initialState);
  });

  it("should renders the header correctly", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const logoElement = screen.getByAltText("VR Benefícios Logo");
    expect(logoElement).toBeInTheDocument();

    const cartButton = screen.getByText(mockCart.products.length.toString());
    expect(cartButton).toBeInTheDocument();
  });

  it("opens the CartModal when the CartButton is clicked", async () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const cartButton = screen.getByTestId("cart-button");
    await userEvent.click(cartButton);

    const product1 = screen.getByText("Product 1");
    const product2 = screen.getByText("Product 2");
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
});
