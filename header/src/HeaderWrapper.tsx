import { Store } from "redux";
import { Provider } from "react-redux";
import { Header } from "./components/Header";
import { RootState } from "root_app/store";

type HeaderProps = {
  store: Store<RootState>;
};

const HeaderWrapper = ({ store }: HeaderProps) => {
  return (
    <Provider store={store || {}}>
      <Header />
    </Provider>
  );
};

export default HeaderWrapper;
