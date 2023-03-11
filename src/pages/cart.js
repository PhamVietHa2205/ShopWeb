import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import PageHeader from "../components/Cart/PageHeader";
import CartShop from "../components/Cart/Cart";
const Cart = () => {
    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader/>
        <CartShop/>
        <Footer />
     
        </>
    );
}

export default Cart;