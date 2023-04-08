import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import CheckOut from "../components/Checkout/CheckOut";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";

const Checkout = () => {
    require('./../assets/css/style.css');
	require('./../assets/css/style.min.css');
	require('./../assets/scss/style.scss');
	require('./../assets/css/newStyle.css');
    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader title={'checkout'}/>
        <CheckOut/>
        <Footer />
        <ButtonToTop/>
        </>
    );
}

export default Checkout;