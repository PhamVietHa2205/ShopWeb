import { changeLanguage } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "../constants/key_local";

interface ITopBarProps {

}

const TopBar = () => {
    const { t, i18n } = useTranslation();
    const [likeCount, setLikeCount] = useState(0);
    const [itemInCartCount, setItemInCartCount] = useState(0);

    const handleChangeLanguage = (lang: string) => {
		i18n.changeLanguage(lang ?? "en");
	}

    const getClassActive = (lang: string) => {
        return i18n.language === lang ? "text-primary" : "text-dark";
    }

    return (
        <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                    <div className="text-dark">{t('faqs')}</div>
                    <span className="text-muted px-2">|</span>
                    <div className="text-dark">{t('help')}</div>
                    <span className="text-muted px-2">|</span>
                    <div className="text-dark">{t('support')}</div>
                </div>
            </div>
            <div className="col-lg-6 text-end text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a href="#" className={`nav-item nav-link pr-2 ${getClassActive(Language.ENGLISH)}`} onClick={() => changeLanguage(Language.ENGLISH)}>{t('english')}</a>
                    <span className="text-dark px-2">|</span>
                    <a href="#" className={`nav-item nav-link pr-2 ${getClassActive(Language.VIETNAMESE)}`} onClick={() => changeLanguage(Language.VIETNAMESE)}>{t('vietnamese')}</a>
                    <a className="text-dark px-2">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a className="text-dark px-2">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="text-dark px-2">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="text-dark px-2">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a className="text-dark pl-2">
                        <i className="fa fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control me-1" placeholder={t('searchForProduct')}/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary rounded-0">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <a className="btn border me-1">
                    <i className="fa fa-heart text-primary"></i>
                    <span> {likeCount}</span>
                </a>
                <a className="btn border">
                    <i className="fa fa-shopping-cart text-primary"></i>
                    <span> {itemInCartCount}</span>
                </a>
            </div>
        </div>
    </div>
    );
}

export default TopBar;