import TopBar from "../shared/TopBar";
import PageHeader from "../shared/PageHeader";
import Footer from "../shared/Footer";
import ContactDetail from "../components/Contact/ContactDetail";
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from "../shared/AppDrawer";

const Contact = () => {
    require('./../assets/css/style.css');
	require('./../assets/css/style.min.css');
	require('./../assets/scss/style.scss');
	require('./../assets/css/newStyle.css');
        return (
            <>
            <TopBar/>
            <AppDrawer />
            <PageHeader title={'contact'}/>
            <ContactDetail/>
            <Footer />
            <ButtonToTop/>
            </>
        );
    }
    
    export default Contact;