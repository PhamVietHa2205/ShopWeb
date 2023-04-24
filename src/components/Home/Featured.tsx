import { memo } from "react";
import { useTranslation } from "react-i18next";

interface IFeaturedProps {
    
}

const Featured = () => {
    const { t } = useTranslation();
    
   return (
    <div className="container-fluid pt-5 justify-content-center">
    <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: 25}}>
                <h1 className="fa fa-check fa-2x text-primary mr-3"></h1>
                <h5 className="font-weight-semi-bold m-0"> {t('qualityProduct')}</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: 25}}>
                <h1 className="fa fa-truck fa-2x text-primary mr-3"></h1>
                <h5 className="font-weight-semi-bold m-0"> {t('freeShipping')}</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: 25}}>
                <h1 className="fa fa-exchange fa-2x text-primary mr-3"></h1>
                <h5 className="font-weight-semi-bold m-0"> {t('returnTime')}</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4" style={{padding: 25}}>
                <h1 className="fa fa-phone fa-2x text-primary mr-3"></h1>
                <h5 className="font-weight-semi-bold m-0"> {t('typeSupport')}</h5>
            </div>
        </div>
    </div>
</div>
   )
}
export default memo(Featured);