import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface IOfferProps {

}

const SellerShop = () => {
    const { t } = useTranslation();

    const shopList = [
        {
            id: 1,
            logo: "https://res.cloudinary.com/dbnjt2htm/image/upload/v1681231509/sale_final/logo/idewtqdviak8wvnzayqt.png",
            name: "Thế giới di động",
            address: "171 Thái Hà",
        },
        {
            id: 2,
            logo: "https://res.cloudinary.com/dbnjt2htm/image/upload/v1681231509/sale_final/logo/idewtqdviak8wvnzayqt.png",
            name: "Thế giới di động",
            address: "171 Thái Hà",
        },
    ]
    return (
        <div className="container-fluid offer pt-5">
            <div className="row px-xl-5">
                {
                    shopList.map((shop, index) => {
                        return <div key={shop.id} className="col-md-6 ">
                            <div className={"position-relative d-flex align-items-center bg-secondary text-center text-white mb-2 py-5    text-md-left"}>
                                <div className='position-absolute top-0 left-0'><i className="fa fa-trash-o text-muted" aria-hidden="true"></i></div>
                                <div className='bg-secondary align-self-center'>
                                    <img src={shop.logo} alt="Error load" />
                                </div>

                                <div className="position-relative px-5" style={{ zIndex: '1' }}>
                                    <h5 className="text-uppercase text-primary mb-3">{shop.address}</h5>
                                    <h2 className="mb-4 font-weight-semi-bold">{shop.name}</h2>
                                    <div className=" d-flex justify-content-between ">
                                        <a className="btn btn-outline-primary py-md-2 px-md-3" ><i className="fa fa-product-hunt text-primary mr-1"></i>{t('viewDetail')}</a>
                                        <a className="btn btn-outline-primary py-md-2 px-md-3" ><i className="fa fa-shopping-bag text-primary mr-1"></i>{t('order')}</a>
                                    </div>
                                    {/* <a href="#" className="btn btn-outline-primary py-md-2 px-md-3">Check In</a> */}
                                </div>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    )
}
export default memo(SellerShop);