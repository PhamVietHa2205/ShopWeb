import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteUrl } from "./constants/path_local";
import "./languages";
import { store } from './redux/index';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
/** ADMIN */
import { Admin } from "./pages/admin";
import { UserManager } from "./pages/admin_user";
import { ProductManager } from "./pages/admin_product";
import { OrderManager } from "./pages/admin_order";
import { SignInAdmin } from "./pages/sign_in_admin";
import { ProfileManger } from "./pages/admin_profile";
import { ShopManager } from "./pages/admin_shop";
import { CommentManager } from "./pages/admin_comment";
import { CreateShopAdmin } from "./pages/admin_createShop";
/** USER */
import { Home } from "./pages/home";
import { LogIn } from "./pages/log_in";
import { SignUp } from "./pages/sign_up";
import Shop from "./pages/shop";
import Detail from "./pages/detail";
import Checkout from "./pages/checkout";
import Cart from './pages/cart'
import Contact from "./pages/contact";
import ChangePassword from "./pages/change_password";

/**SELLER */
import { SellerHome } from "./pages/seller_home"
import { ProductList } from "./pages/seller_productList";
import { OrderList } from "./pages/seller_order";
import { CreateProduct } from "./pages/seller_createProduct";
import Order from "./pages/order";
import SellerShop from "./pages/seller_shop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path={RouteUrl.HOME_PATH} element={<Home />}></Route>
          <Route path={RouteUrl.LOG_IN} element={<LogIn />}></Route>
          <Route path={RouteUrl.SIGN_UP} element={<SignUp />}></Route>
          <Route path={RouteUrl.DETAIL} element={<Detail />}></Route>
          <Route path={RouteUrl.CHECKOUT} element={<Checkout />}></Route>
          <Route path={RouteUrl.SHOP} element={<Shop />}></Route>
          <Route path={RouteUrl.CART} element={<Cart />}></Route>
          <Route path={RouteUrl.ORDERS} element={<Order />}></Route>
          <Route path={RouteUrl.CONTACT} element={<Contact />}></Route>
          <Route path={RouteUrl.ADMIN} element={<Admin />}></Route>
          <Route path={RouteUrl.SIGN_IN_ADMIN} element={<SignInAdmin />}></Route>
          <Route path={RouteUrl.ADMIN_USER} element={<UserManager />}></Route>
          <Route path={RouteUrl.ADMIN_PRODUCT} element={<ProductManager />}></Route>
          <Route path={RouteUrl.ADMIN_ORDER} element={<OrderManager />}></Route>
          <Route path={RouteUrl.ADMIN_SHOP} element={<ShopManager />}></Route>
          <Route path={RouteUrl.ADMIN_CREATE_SHOP} element={<CreateShopAdmin />}></Route>
          <Route path={RouteUrl.ADMIN_COMMENT} element={<CommentManager />}></Route>
          <Route path={RouteUrl.SELLER_HOME} element={<SellerHome />}></Route>
          <Route path={RouteUrl.PROFILE_ADMIN} element={<ProfileManger />}></Route>
          <Route path={RouteUrl.CHANGE_PASSWORD} element={<ChangePassword />}></Route>
          <Route path={RouteUrl.SELLER_PRODUCT_LIST} element={<ProductList />}></Route>
          <Route path={RouteUrl.SELLER_CREATE_PRODUCT} element={<CreateProduct />}></Route>
          <Route path={RouteUrl.SELLER_ORDER_LIST} element={<OrderList />}></Route>
          <Route path={RouteUrl.SELLER_SHOP} element={<SellerShop/>}></Route>
        </Routes>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
