import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RouteUrl } from "../../constants/path_local";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { DefaultAssets, LocalStorageKey } from "../../constants/key_local";
import { memo, useEffect, useState } from "react";
import { IUserInformation } from "../../interfaces/author-interface";
const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const userInfo: IUserInformation = useSelector((state: RootState) => state.userInfo);
    const [isLogin, setIsLogin] = useState(false);
    const goToPage = (url: string) => {
        navigate(url);
    }

    const getClassActive = (url: string) => {
        if (window.location.pathname === "/") navigate(RouteUrl.HOME_PATH);
        return window.location.pathname.includes(url) ? "active" : "";
    }

    useEffect(() => {
        setIsLogin(localStorage.getItem(LocalStorageKey.LOGIN) ? true : false);
    }, []);

    const logout = () => {
        localStorage.clear();
        window.location.pathname = RouteUrl.SIGN_IN_ADMIN;
    }
    return (
        <>
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                        </ol>
                        <h6 className="font-weight-bolder mb-0">Dashboard</h6>
                    </nav>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="input-group">
                                <span className="input-group-text text-body"><i className="fa fa-search" aria-hidden="true"></i></span>
                                <input type="text" className="form-control" placeholder="Type here..." />
                            </div>
                        </div>
                        <ul className="navbar-nav  justify-content-end">
                            <li className="nav-item d-flex align-items-center">
                                <a className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href="/">Trang người dùng</a>
                            </li>
                            <li className="nav-item  px-3 align-items-center">
                                <a href="# " id="dropdownMenuButton" data-bs-toggle="dropdown" className="nav-link d-flex text-body font-weight-bold px-0">
                                    {
                                        isLogin &&
                                        <>
                                            <img src={userInfo?.avatar ?? DefaultAssets.AVATAR_IMG_LINK} className="avatar avatar-sm  me-3 "></img>
                                            <div className="nav-link">{userInfo?.fullname}</div>
                                        </>
                                    }
                                </a>
                                <ul className="dropdown-menu  dropdown-menu-end mt-0  px-2  me-sm-3" aria-labelledby="dropdownMenuButton">
                                    <li className="mb-2">
                                        <a className="dropdown-item border-radius-md" href="#">
                                            <div className="d-flex align-items-center py-1">
                                                <div className="my-auto justify-content-center ">
                                                    <img src={require("../../assets/img/team-2.jpg")} className="avatar avatar-sm  me-3 " />
                                                </div>
                                                <h6 className="text-sm font-weight-normal mb-1">
                                                    <span className="font-weight-bold">Profile</span> from Laur
                                                </h6>


                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item border-radius-md" href="#" onClick={() => logout()}>
                                            <div className="d-flex align-items-center py-1 ">
                                                <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">

                                                    <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                        <title>credit-card</title>
                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                                <g transform="translate(1716.000000, 291.000000)">
                                                                    <g transform="translate(453.000000, 454.000000)">
                                                                        <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                        <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h6 className="text-sm font-weight-normal mb-1">
                                                    Log out
                                                </h6>


                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* <li className="nav-item px-3 d-flex align-items-center">
                                <a href="#" className="nav-link text-body p-0">
                                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                </a>
                            </li> */}
                            <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                <a href="#" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-bell cursor-pointer"></i>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default memo(Header);