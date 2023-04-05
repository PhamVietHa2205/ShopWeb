import { useTranslation } from 'react-i18next';
import { WEB_SHOP_INFO } from '../constants/key_local';

const Footer = () => {
    const { t } = useTranslation();

    return(
        <div className="container-fluid bg-secondary text-dark">
        <div className="row px-xl-5 pt-5 container-fluid">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <a href="" className="text-decoration-none">
                    <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">{WEB_SHOP_INFO.FIRST_LABEL}</span>{WEB_SHOP_INFO.SECOND_LABEL}</h1>
                </a>
                <p>{t('connectToMe')}</p>
                <p className="mb-2"><i className="fa fa-map-marker text-primary mr-3">{WEB_SHOP_INFO.ADDRESS}</i></p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>{WEB_SHOP_INFO.EMAIL}</p>
                <p className="mb-0"><i className="fa fa-phone text-primary mr-3"></i>+{WEB_SHOP_INFO.PHONE_NUMBER}</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className='col-md-4'></div>
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">{t('quickLinks')}</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="index"><i className="fa fa-angle-right mr-2"></i>{t('home')}</a>
                            <a className="text-dark mb-2" href="shop"><i className="fa fa-angle-right mr-2"></i>{t('ourShop')}</a>
                            <a className="text-dark mb-2" href="detail"><i className="fa fa-angle-right mr-2"></i>{t('shopDetail')}</a>
                            <a className="text-dark mb-2" href="cart"><i className="fa fa-angle-right mr-2"></i>{t('shoppingCart')}</a>
                            <a className="text-dark mb-2" href="checkout"><i
                                    className="fa fa-angle-right mr-2"></i>{t('checkout')}</a>
                            <a className="text-dark" href="shop"><i className="fa fa-angle-right mr-2"></i>{t('contactUs')}</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">{t('newsletter')}</h5>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder={t('yourName')}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 py-4" placeholder={t('yourEmail')}
                                    required/>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block border-0 py-3" type="submit">{t('subscribeNow')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mx-xl-5 py-4">
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-dark">
                    &copy; <a className="text-dark text-decoration-none font-weight-semi-bold" href="#">{WEB_SHOP_INFO.SITE_NAME}</a>. {t('allRightsServed')}. {t('designedBy')}
                    <a className="text-dark font-weight-semi-bold text-decoration-none" href="https://htmlcodex.com"> {WEB_SHOP_INFO.DESIGNER}</a>. {t('distributedBy')} <a className="text-decoration-none" target="_blank">{WEB_SHOP_INFO.DISTRIBUTER}</a>
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src={require('../assets/img/payments.png')} alt=""/>
            </div>
        </div>
    </div>
    )
}
export default Footer;