import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Shop/ShopDetail";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";

const Shop = () => {
  require('./../assets/css/style.css');
	require('./../assets/css/style.min.css');
	require('./../assets/scss/style.scss');
	require('./../assets/css/newStyle.css');
  return (
    <>
      <TopBar />
      <AppDrawer />
      <PageHeader title={'shop'}/>
      <ShopDetail />
      <Footer />
      <ButtonToTop/>
    </>
  );
};

export default Shop;
