import TopBar from '../shared/TopBar'
import Featured from "../components/Home/Featured";
import Categories from "../components/Home/Categories";
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from "../shared/AppDrawer";
import Shop from '../components/Seller/Shop';
export function SellerHome() {
    require('./../assets/css/style.css');
    require('./../assets/css/style.min.css');
    require('./../assets/scss/style.scss');
    require('./../assets/css/newStyle.css');

    return <>
        <TopBar />
        <AppDrawer />
        <Featured />
        <Shop />
        <Categories />
        <ButtonToTop />
    </>
}