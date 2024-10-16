import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { ProductList } from "../../pages/ProductList";
import { ProductService } from "../../services/product";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import { RootState } from "store";
import { productsReducer } from "store/modules/products";
import { cartReducer } from "store/modules/cart";

jest.mock("../../services/product", () => ({
  ProductService: {
    getProducts: jest.fn(),
  },
}));

jest.mock("header/Header", () => ({
  __esModule: true,
  default: () => <header>Mocked Header</header>,
}));

jest.mock("footer/Footer", () => ({
  __esModule: true,
  default: () => <footer>Footer Content</footer>,
}));

describe("App Integration Test with Microfrontends", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    (ProductService.getProducts as jest.Mock).mockResolvedValue([
      { id: 1, title: "Product 1", price: 100 },
      { id: 2, title: "Product 2", price: 200 },
    ]);

    store = configureStore({
      reducer: {
        products: productsReducer,
        cart: cartReducer,
      },
    });
  });

  it("should render the Header, Footer, and call getProducts correctly", async () => {
    const Header = React.lazy(() => import("header/Header"));
    const Footer = React.lazy(() => import("footer/Footer"));

    render(
      <React.Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <Header store={store} />
          <ProductList />
          <Footer />
        </Provider>
      </React.Suspense>
    );

    await waitFor(() => {
      const headerElement = screen.getByRole("banner");
      expect(headerElement).toBeInTheDocument();
    });

    const footerElement = screen.getByText("Footer Content");
    expect(footerElement).toBeInTheDocument();

    await waitFor(() => {
      expect(ProductService.getProducts).toHaveBeenCalledTimes(1);
    });

    const product1 = await screen.findByText("Product 1");
    const product2 = await screen.findByText("Product 2");

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
});
