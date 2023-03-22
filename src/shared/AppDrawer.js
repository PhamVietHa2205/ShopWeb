import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";

const AppDrawer = () => {
    const { t } = useTranslation();

    return (
        <>
        <div className="container-fluid mb-5">
        		<div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                    data-bs-toggle="collapse" data-bs-target="#navbar-vertical"
                    style={{height: 65, marginTop: -1, padding: 30 }}>
                    <h6 className="m-0">{t("categories")}</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="collapse navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                    id="navbar-vertical">
                    <div className="navbar-nav w-100 overflow-hidden" style={{height: 410}}>
                        <div className="nav-item dropdown">
                            <a className="nav-link" data-bs-toggle="dropdown">{t("dresses")} <i
                                    className="fa fa-angle-down float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a className="dropdown-item">{t('manDresses')}</a>
                                <a className="dropdown-item">{t('womanDresses')}</a>
                                <a className="dropdown-item">{t('babyDresses')}</a>
                            </div>
                        </div>
                        <a className="nav-item nav-link">{t('shirts')}</a>
                        <a className="nav-item nav-link">{t('jeans')}</a>
                        <a className="nav-item nav-link">{t('swimwear')}</a>
                        <a className="nav-item nav-link">{t('sleepwear')}</a>
                        <a className="nav-item nav-link">{t('sportwear')}</a>
                        <a className="nav-item nav-link">{t('jumpsuits')}</a>
                        <a className="nav-item nav-link">{t('blazers')}</a>
                        <a className="nav-item nav-link">{t('jackets')}</a>
                        <a className="nav-item nav-link">{t('shoes')}</a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                className="text-primary font-weight-bold border px-3 mr-1">E</span>Shop</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="/" className="nav-item nav-link active">{t('home')}</a>
                            <a href="shop" className="nav-item nav-link">{t('shop')}</a>
                            <a href="detail" className="nav-item nav-link">{t('shopDetail')}</a>
                            <div className="nav-item dropdown">
                                <a className="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="cart" className="dropdown-item">{t('shoppingCart')}</a>
                                    <a href="checkout" className="dropdown-item">{t('checkout')}</a>
                                </div>
                            </div>
                            <a href="/contact" className="nav-item nav-link" >{t('contact')}</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <a href="/log_in" className="nav-item nav-link">{t('login')}</a>
                            <a className="nav-item nav-link">{t('register')}</a>
                        </div>
                    </div>
                </nav>
                <NavBar/>
            </div>
            </div>
            </div>
            </>
    )
}
export default AppDrawer;