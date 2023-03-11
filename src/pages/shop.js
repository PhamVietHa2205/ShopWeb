import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Shop/ShopDetail";
import PageHeader from "../components/Shop/PagrHeader";
const Shop = () => {
  return (
    <>
      <TopBar />
      <AppDrawer />
      <PageHeader/>
      <ShopDetail />
      <Footer />
    </>
  );
};

export default Shop;
