import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { RouteUrl } from "../constants/path_local";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { DefaultAssets, LocalStorageKey } from "../constants/key_local";
import { memo, useEffect, useState } from "react";
import { IUserInformation } from "../interfaces/author-interface";

interface IAppDrawerProps {
    
}

const AppDrawer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const userInfo: IUserInformation = useSelector((state: RootState) => state.userInfo);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setIsLogin(localStorage.getItem(LocalStorageKey.LOGIN) ? true : false);
    }, []);

    const logout = () => {
        localStorage.clear();
        window.location.pathname = RouteUrl.LOG_IN;
    }

    const signup = () => {
        localStorage.clear();
        window.location.pathname = RouteUrl.SIGN_UP;
    }

    const goToPage = (url: string) => {
        navigate(url);
    }

    const getClassActive = (url: string) => {
        if (window.location.pathname === "/") navigate(RouteUrl.HOME_PATH);
        return window.location.pathname.includes(url) ? "active" : "";
    }

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
                            <a href="#" className="nav-link" data-bs-toggle="dropdown">{t("dresses")} <i
                                    className="fa fa-angle-down float-right mt-1"></i></a>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <a href="#" className="dropdown-item">{t('menDresses')}</a>
                                <a href="#" className="dropdown-item">{t('womanDresses')}</a>
                                <a href="#" className="dropdown-item">{t('babyDresses')}</a>
                            </div>
                        </div>
                        <a href="#" className="nav-item nav-link">{t('shirts')}</a>
                        <a href="#" className="nav-item nav-link">{t('jeans')}</a>
                        <a href="#" className="nav-item nav-link">{t('swimwear')}</a>
                        <a href="#" className="nav-item nav-link">{t('sleepwear')}</a>
                        <a href="#" className="nav-item nav-link">{t('sportwear')}</a>
                        <a href="#" className="nav-item nav-link">{t('jumpsuits')}</a>
                        <a href="#" className="nav-item nav-link">{t('blazers')}</a>
                        <a href="#" className="nav-item nav-link">{t('jackets')}</a>
                        <a href="#" className="nav-item nav-link">{t('shoes')}</a>
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
                            <a href="#" onClick={() => goToPage(RouteUrl.HOME_PATH)} className={`nav-item nav-link ${getClassActive(RouteUrl.HOME_PATH)}`}>{t('home')}</a>
                            <a href="#" onClick={() => goToPage(RouteUrl.SHOP)} className={`nav-item nav-link ${getClassActive(RouteUrl.SHOP)}`}>{t('shop')}</a>
                            <a href="#" onClick={() => goToPage(RouteUrl.DETAIL)} className={`nav-item nav-link ${getClassActive(RouteUrl.DETAIL)}`}>{t('shopDetail')}</a>
                            <div className="nav-item dropdown">
                                <a className="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown">{t('pages')}</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="#" onClick={() => goToPage(RouteUrl.CART)} className="dropdown-item">{t('shoppingCart')}</a>
                                    <a href="#" onClick={() => goToPage(RouteUrl.ORDERS)} className="dropdown-item">{t('orders')}</a>
                                </div>
                            </div>
                            <a href="#" onClick={() => goToPage(RouteUrl.CONTACT)} className={`nav-item nav-link ${getClassActive(RouteUrl.CONTACT)}`}>{t('contact')}</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            {
                                isLogin &&
                                <>
                                    <img src={userInfo?.avatar ?? DefaultAssets.AVATAR_IMG_LINK} style={{width: 30, height: 30, padding: "auto"}} className="bg-info rounded-circle align-self-center"></img>
                                    <div className="nav-link">{userInfo?.fullname}</div>
                                </>
                            }
                            <a href="#" onClick={() => logout()} className="nav-item nav-link">{t(isLogin ? "logout" : "login")}</a>
                            <a href="#" onClick={() => signup()} className="nav-item nav-link">{t('register')}</a>
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
export default memo(AppDrawer);