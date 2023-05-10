import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import PageHeader from "../shared/PageHeader";
import CartShop from "../components/Cart/Cart";
import ButtonToTop from "../shared/ButtonToTop";
import { useState } from "react";
import Loading from "../shared/Loading";

const Cart = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader title={'cart'}/>
        <CartShop setLoading={setIsLoading}/>
        <Footer />
        <ButtonToTop/>
        <Loading loading={isLoading} />
        </>
    );
}

export default Cart;