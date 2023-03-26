import TopBar from "../shared/TopBar";
import PageHeader from "../components/Contact/PageHeader";
import Footer from "../shared/Footer";
import ContactDetail from "../components/Contact/ContactDetail";
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from "../shared/AppDrawer";

const Contact = () => {
    require('../assets/css/style.css');
	require('../assets/css/style.min.css');
	require('../assets/scss/style.scss');
        return (
            <>
            <TopBar/>
            <AppDrawer />
            <PageHeader/>
            <ContactDetail/>
            <Footer />
            <ButtonToTop/>
            </>
        );
    }
    
    export default Contact;