import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";
import { useState } from "react";
import Loading from "../shared/Loading";
import Orders from "../components/Orders/Orders";

const Order = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader title={'order'}/>
        <Orders setLoading={setIsLoading}/>
        <Footer />
        <ButtonToTop/>
        <Loading loading={isLoading} />
        </>
    );
}

export default Order;