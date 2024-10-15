import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "store";
import { UserProvider } from "contexts";
import { ProductList } from "pages/ProductList";
import { Wrapper } from "components";
import { UserMiddleware } from "middlewares/UserMiddleware";

const Header = lazy(() => import("header/Header"));
const Footer = lazy(() => import("footer/Footer"));

function App() {
  return (
    <div>
      <Provider store={store}>
        <UserProvider>
          <UserMiddleware>
            <Wrapper>
              <Suspense fallback={<div>Loading...</div>}>
                <Header store={store}></Header>
              </Suspense>

              <ProductList />
              <Footer />
            </Wrapper>
          </UserMiddleware>
        </UserProvider>
      </Provider>
    </div>
  );
}

export default App;
