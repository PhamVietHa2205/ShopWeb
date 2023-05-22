import Footer from "../shared/Footer";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";
import { useState } from "react";
import Loading from "../shared/Loading";
import TopBar from "../shared/seller/TopBar";
import AppDrawer from "../shared/seller/AppDrawer";
import ShopDetail from "../components/Seller/ShopDetail";

const Shop = () => {
  const [isLoading, setIsLoading] = useState();

  return (
    <>
      <TopBar />
      <AppDrawer />
      <PageHeader title={'shop'}/>
      <ShopDetail setLoading={setIsLoading}/>
      <Footer />
      <ButtonToTop/>
      <Loading loading={isLoading}/>
    </>
  );
};

export default Shop;
