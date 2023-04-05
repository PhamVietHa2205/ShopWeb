import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Details/ShopDetail";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";
const Detail = () => {
    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader title={'shopDetail'}/>
        <ShopDetail/>
        <Footer />
        <ButtonToTop/>
        </>
    );
}

export default Detail;