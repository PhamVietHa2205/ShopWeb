import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Shop/ShopDetail";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";

const Shop = () => {

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
