import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import PageHeader from "../shared/PageHeader";
import CartShop from "../components/Cart/Cart";
import ButtonToTop from "../shared/ButtonToTop";

const Cart = () => {
    require('./../assets/css/style.css');
	require('./../assets/css/style.min.css');
	require('./../assets/scss/style.scss');
	require('./../assets/css/newStyle.css');
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