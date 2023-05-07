import TopBar from "../shared/TopBar";
import AppDrawer from "../shared/AppDrawer";
import Footer from "../shared/Footer";
import PageHeader from "../shared/PageHeader";
import Product from "../components/Seller/Product";
import ButtonToTop from "../shared/ButtonToTop";

export function ProductList() {
    return (
        <>
            <TopBar />
            <AppDrawer />
            <PageHeader title={'productList'} />
            <Product />
            <Footer />
            <ButtonToTop />
        </>
    );
}
