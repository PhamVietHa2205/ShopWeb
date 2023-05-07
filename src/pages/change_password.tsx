import TopBar from "../shared/TopBar";
import PageHeader from "../shared/PageHeader";
import Footer from "../shared/Footer";
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from "../shared/AppDrawer";
import Form from "../components/ChangePassWord/Form";
const ChangePassword = () => {
    return (
        <>
            <TopBar />
            <AppDrawer />
            <PageHeader title={'changePassword'} />
            <Form />
            <Footer />
            <ButtonToTop />
        </>
    );
}

export default ChangePassword;