import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Details/ShopDetail";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";
import { useState } from "react";
import Loading from "../shared/Loading";

const Detail = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader title={'shopDetail'}/>
        <ShopDetail setLoading={setIsLoading}/>
        <Footer />
        <ButtonToTop/>
        <Loading loading={isLoading}/>
        </>
    );
}

export default Detail;