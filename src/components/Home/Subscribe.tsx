import { useTranslation } from "react-i18next";

interface ISubscribeProps {
    
}

const Subscribe = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid bg-secondary mt-5">
        <div className="row justify-content-md-center py-5 px-xl-5">
            <div className="col-md-6 col-12 py-5">
                <div className="text-center mb-2 pb-2">
                    <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">{t('stayUpdated')}</span></h2>
                    <p>{t('stayWithMe')}</p>
                </div>
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-4" placeholder={t("emailGoesHere")}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">{t('subscribe')}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Subscribe;