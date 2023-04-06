import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteUrl } from "./constants/path_local";
import { Home } from "./pages/home";
import { LogIn } from "./pages/log_in";
import { SignUp } from "./pages/sign_up";
import Shop from "./pages/shop";
import "./languages";
import Detail from "./pages/detail";
import Checkout from "./pages/checkout";
import Cart from './pages/cart'
import Contact from "./pages/contact";
import { store } from './redux/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={RouteUrl.HOME_PATH} element={<Home />}></Route>
          <Route path={RouteUrl.LOG_IN} element={<LogIn />}></Route>
          <Route path={RouteUrl.SIGN_UP} element={<SignUp />}></Route>
          <Route path={RouteUrl.DETAIL} element={<Detail />}></Route>
          <Route path={RouteUrl.CHECKOUT} element={<Checkout />}></Route>
          <Route path={RouteUrl.SHOP} element={<Shop />}></Route>
          <Route path={RouteUrl.CART} element={<Cart />}></Route>
          <Route path={RouteUrl.CONTACT} element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
