import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IProductHotPayLoad, IProductHotResponse } from '../../interfaces/product-interface';
import { formatNumber } from '../../utils/index';
import productApi from '../../api/product-api';
import { DefaultAssets, HttpCode } from '../../constants/key_local';
import * as Notify from "../../shared/Notify";
import { RouteUrl } from '../../constants/path_local';
import { useNavigate } from 'react-router-dom';

interface IProductProps {
    
}

const Product = () => {
    const { t } = useTranslation();
    const [hotProductList, setHotProductList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        productApi.getHotProductList({}).then((res) => {
            let data: IProductHotResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setHotProductList(data?.payload);
            } else {
                Notify.error(data?.message);
            }
        })
    }, []);

    const handleViewDetail = (id: string) => {
        navigate(RouteUrl.DETAIL, {state: {id: id}});
    }

    const handleAddToCart = () => {
        //To Do
    }

    return (
        <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">{t('trendyProducts')}</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {
                hotProductList.map((item: IProductHotPayLoad, index) => {
                    return <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={index}>
                    <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className="img-fluid w-100" src={item.images[0] ?? DefaultAssets.PRODUCT_IMAGE_LINK }  alt=""/>
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 className="text-truncate mb-3">{item.name}</h6>
                            <div className="d-flex justify-content-center">
                                <h6>{formatNumber(Number(item.price), 2)} VND</h6>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                            <a href="#" className="btn btn-sm text-dark p-0" onClick={() => handleViewDetail(item.id)}><i className="fa fa-eye text-primary mr-1"></i>{t('viewDetail')}</a>
                            <a href="#" className="btn btn-sm text-dark p-0"><i
                                className="fa fa-shopping-cart text-primary mr-1"
                                onClick={() => handleAddToCart()}></i>{t('addToCart')}</a>
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