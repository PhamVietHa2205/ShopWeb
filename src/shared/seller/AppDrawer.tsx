import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteUrl } from "../../constants/path_local";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { DefaultAssets, LocalStorageKey } from "../../constants/key_local";
import { memo, useEffect, useState } from "react";
import { IUserInformation } from "../../interfaces/author-interface";

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
        if (window.location.pathname === "/") navigate(RouteUrl.SELLER_HOME);
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
                            <a href="#" onClick={() => goToPage(RouteUrl.SELLER_HOME)} className={`nav-item nav-link ${getClassActive(RouteUrl.HOME_PATH)}`}>{t('home')}</a>
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
                {/* <NavBar/> */}
            </div>
            </div>
            </div>
            </>
    )
}
export default memo(AppDrawer);