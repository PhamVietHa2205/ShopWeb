import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils';

const Product = () => {
    const { t } = useTranslation();
    const listTrendyProduct = [
        {
            name: "Colorful Stylish Shirt",
            image: "product-1.jpg",
            prePrice: 123,
            saledPrice: 123,
        },
        {
            name: "Colorful Stylish Shirt",
            image: "product-2.jpg",
            prePrice: 123,
            saledPrice: 123,
        },
        {
            name: "Colorful Stylish Shirt",
            image: "product-3.jpg",
            prePrice: 123,
            saledPrice: 123,
        },
        {
            name: "Colorful Stylish Shirt",
            image: "product-4.jpg",
            prePrice: 123,
            saledPrice: 123,
        },
        {
            name: "Colorful Stylish Shirt",
            image: "product-5.jpg",
            prePrice: 123,
            saledPrice: 123,
        },
        {
            name: "Colorful Stylish Shirt",
            image: "product-6.jpg",
            prePrice: 123,
            saledPrice: 123,
        },
        {
            name: "Colorful Stylish Shirt",
            image: "product-7.jpg",
            prePrice: 123,
            saledPrice: 123,
        },
        {
            name: "Colorful Stylish Shirt",
            image: "product-8.jpg",
            prePrice: 123,
            saledPrice: 123,
        }
    ]

    return (
        <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">{t('trendyProducts')}</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {
                listTrendyProduct.map((item, index) => {
                    return <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={require(`../../assets/img/${item.image}`)}  alt=""/>
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">{item.name}</h6>
                            <div className="d-flex justify-content-center">
                                <h6>${formatNumber(item.prePrice, 2)}</h6>
                                <h6 className="text-muted ml-2"><del>${formatNumber(item.saledPrice, 2)}</del></h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="" className="btn btn-sm text-dark p-0"><i className="fa fa-eye text-primary mr-1"></i>{t('viewDetail')}</a>
                            <a href="" className="btn btn-sm text-dark p-0"><i
                                    className="fa fa-shopping-cart text-primary mr-1"></i>{t('addToCart')}</a>
                        </div>
                    </div>
                </div>
                })
            }
        </div>
    </div>
    )
}
export default Product;