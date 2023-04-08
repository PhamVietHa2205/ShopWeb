import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Details/ShopDetail";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";

const Detail = () => {
    require('./../assets/css/style.css');
	require('./../assets/css/style.min.css');
	require('./../assets/scss/style.scss');
	require('./../assets/css/newStyle.css');
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