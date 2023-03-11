import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Details/ShopDetail";
import PageHeader from "../components/Details/PageHeader";
const Detail = () => {
    return (
        <>
        <TopBar/>
        <AppDrawer />
        <PageHeader/>
        <ShopDetail/>
        <Footer />
        </>
    );
}

export default Detail;