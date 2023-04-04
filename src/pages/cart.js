import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import PageHeader from "../components/PageHeader";
import CartShop from "../components/Cart/Cart";
import ButtonToTop from "../shared/ButtonToTop";
const Cart = () => {
    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader title={'cart'}/>
        <CartShop/>
        <Footer />
        <ButtonToTop/>
        </>
    );
}

export default Cart;