import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import ShopDetail from "../components/Shop/ShopDetail";
import PageHeader from "../shared/PageHeader";
import ButtonToTop from "../shared/ButtonToTop";
import { useState } from "react";
import Loading from "../shared/Loading";

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
