
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DETAIL,
  HOME_PATH,
  LOG_IN,
  SIGN_UP,
  CHECKOUT,
  SHOP,
  CART,
  CONTACT,
  ADMIN,
  SIGN_IN_ADMIN
} from "./constants/path_local";
import  Home  from "./pages/home";
import { LogIn } from "./pages/log_in";
import  SignUp  from "./pages/sign_up";
import Shop from "./pages/shop";
import "./languages";
import Detail from "./pages/detail";
import Checkout from "./pages/checkout";
import Cart from './pages/cart'
import Contact from "./pages/contact";
import DashBoard from "./pages/admin";
import SignInAdmin from "./pages/signInAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PATH} element={<Home />}></Route>
        <Route path={LOG_IN} element={<LogIn />}></Route>
        <Route path={SIGN_UP} element={<SignUp />}></Route>
        <Route path={DETAIL} element={<Detail />}></Route>
        <Route path={CHECKOUT} element={<Checkout />}></Route>
        <Route path={SHOP} element={<Shop />}></Route>
        <Route path={CART} element={<Cart />}></Route>
        <Route path={CONTACT} element={<Contact/>}></Route>
        <Route path={ADMIN} element={<DashBoard />}></Route>
        <Route path={SIGN_IN_ADMIN} element={<SignInAdmin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
