import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import CheckOut from "../components/Checkout/CheckOut";
import PageHeader from "../components/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";
const Checkout = () => {
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