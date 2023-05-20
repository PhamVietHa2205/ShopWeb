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
            <div className="col-lg-12">
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
                            <a href="#" onClick={() => goToPage(RouteUrl.HOME_PATH)} className={`nav-item nav-link ${getClassActive(RouteUrl.HOME_PATH)}`}><i className={`fa fa-home ${getClassActive(RouteUrl.HOME_PATH)}`}>{t('home')}</i></a>
                                    <a href="#" onClick={() => goToPage(RouteUrl.CART)} className={`nav-item nav-link ${getClassActive(RouteUrl.CART)}`}><i className={`fa fa-shopping-cart ${getClassActive(RouteUrl.CART)}`}>{t('shoppingCart')}</i></a>
                                    <a href="#" onClick={() => goToPage(RouteUrl.ORDERS)} className={`nav-item nav-link ${getClassActive(RouteUrl.ORDERS)}`}><i className={`fa fa-exchange ${getClassActive(RouteUrl.ORDERS)}`}>{t('orders')}</i></a>
                            <a href="#" onClick={() => goToPage(RouteUrl.CONTACT)} className={`nav-item nav-link ${getClassActive(RouteUrl.CONTACT)}`}><i className={`fa fa-envelope ${getClassActive(RouteUrl.CONTACT)}`}>{t('contact')}</i></a>
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