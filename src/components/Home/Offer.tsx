import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface IOfferProps {
    
}

const Offer = () => {
    const { t } = useTranslation();

   return (
    <div className="container-fluid offer pt-5">
    <div className="row px-xl-5">
        <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                <img src={require('../../assets/img/offer-1.png')} alt=""/>
                <div className="position-relative" style={{zIndex: '1'}}>
                    <h5 className="text-uppercase text-primary mb-3">{t('springSales')}</h5>
                    <h1 className="mb-4 font-weight-semi-bold">{t('springCollection')}</h1>
                    <a href="" className="btn btn-outline-primary py-md-2 px-md-3">{t('shopNow')}</a>
                </div>
            </div>
        </div>
        <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                <img src={require('../../assets/img/offer-2.png')} alt=""/>
                <div className="position-relative" style={{zIndex: '1'}}>
                    <h5 className="text-uppercase text-primary mb-3">{t('winterSales')}</h5>
                    <h1 className="mb-4 font-weight-semi-bold">{t('winterCollection')}</h1>
                    <a href="" className="btn btn-outline-primary py-md-2 px-md-3">{t('shopNow')}</a>
                </div>
            </div>
        </div>
    </div>
</div>
   )
}
export default memo(Offer);