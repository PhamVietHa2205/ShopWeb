import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import CheckOut from "../components/Checkout/CheckOut";
import PageHeader from "../components/Checkout/PageHeader";
const Checkout = () => {
    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader/>
        <CheckOut/>
        <Footer />
        </>
    );
}

export default Checkout;