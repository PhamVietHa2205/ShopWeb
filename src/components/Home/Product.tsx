import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICartEditRequest, ICartProduct, IProductHotPayLoad, IProductHotResponse } from '../../interfaces/product-interface';
import { formatNumber } from '../../utils/index';
import productApi from '../../api/product-api';
import { DefaultAssets, HttpCode, LocalStorageKey } from '../../constants/key_local';
import * as Notify from "../../shared/Notify";
import { RouteUrl } from '../../constants/path_local';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { updateCart } from '../../redux/reducers/cart-reducer';

interface IProductProps {
    setLoading: any;
}

const Product = (props: IProductProps) => {
    const { setLoading } = props;
    const { t } = useTranslation();
    const [hotProductList, setHotProductList] = useState([]);
    const cart = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        productApi.getHotProductList({}).then((res) => {
            setLoading(false);
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
        window.scrollTo(0, 0);
    }

    const handleAddToCart = (id: string) => {
        setLoading(true);
        let params: ICartEditRequest;
        if (cart && cart?.some((item: ICartProduct) => item.id === id)) {
            params = {
                detail: [...cart.map((item: ICartProduct) => {
                    return {idProduct: item.id, quantity: item.id === id ? (item.quantity + 1) : item.quantity}
                })]
            };
        } else {
            if (cart)
            params = {
                detail: [...cart.map((item: ICartProduct) => {
                    return {idProduct: item.id, quantity: item.quantity}
                }), {idProduct: id, quantity: 1}]
            };
            else params = {
                detail: [{idProduct: id, quantity: 1}]
            }
        };

        productApi.editCart(params).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK) {
                dispatch(updateCart([...cart, res?.data?.payload]));
                localStorage.setItem(LocalStorageKey.CART, JSON.stringify([...cart, res?.data?.payload]));
            } else {
                Notify.error(res?.data?.message)
            }
        })
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
                            <a className="btn btn-sm text-dark p-0" onClick={() => handleViewDetail(item.id)}><i className="fa fa-eye text-primary mr-1"></i>{t('viewDetail')}</a>
                            <a className="btn btn-sm text-dark p-0" onClick={() => handleAddToCart(item.id)}><i className="fa fa-shopping-cart text-primary mr-1"></i>{t('addToCart')}</a>
                        </div>
                    </div>
                </div>
                })
            }
        </div>
    </div>
    )
}
export default memo(Product);