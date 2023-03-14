import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Shop/ShopDetail";
import PageHeader from "../components/Shop/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";
const Shop = () => {
  return (
    <>
      <TopBar />
      <AppDrawer />
      <PageHeader/>
      <ShopDetail />
      <Footer />
      <ButtonToTop/>
    </>
  );
};

export default Shop;