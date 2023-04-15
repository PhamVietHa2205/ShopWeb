import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteUrl } from "../../constants/path_local";

const NavBar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goToPage = (url: string) => {
        navigate(url);
    }

    const getClassActive = (url: string) => {
        if (window.location.pathname === "/") navigate(RouteUrl.HOME_PATH);
        return window.location.pathname.includes(url) ? "active" : "";
    }

    return (
        <>
              <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0"  target="_blank">
                    <img src={require("../../assets/img/logo-ct-dark.png")} className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold">
                        Website quản trị 
                    </span>
                </a>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link  active" href="/admin">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/small-logos/icon-navbar-dashboard.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="/admin/table">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img  src={require('../../assets/img/small-logos/icon-navbar-table.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Người dùng</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="/admin/billing">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/small-logos/icon-navbar-billing.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Đơn hàng</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="/admin/virtual-reality">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/small-logos/icon-navbar-virtualrelated.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Sản phẩm</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active  " href="/admin/rtl">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/small-logos/icon-navbar-rtl.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Setting</span>
                        </a>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="/admin/profile">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/small-logos/icon-navbar-profile.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Profile</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="/admin/sign-in">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/small-logos/icon-navbar-signin.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Sign In</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="/sign_up">
                            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/small-logos/icon-navbar-signup.svg').default} alt='mySvgImage' />
                            </div>
                            <span className="nav-link-text ms-1">Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
            
        </aside>
            </>
    )
}
export default NavBar;