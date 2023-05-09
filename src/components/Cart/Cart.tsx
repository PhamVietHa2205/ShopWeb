import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/index';
import { useState, useEffect, memo } from 'react';
import productApi from '../../api/product-api';
import { DefaultAssets, HttpCode } from '../../constants/key_local';
import { ICartResponse, ICartProduct } from '../../interfaces/product-interface';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../redux/reducers/cart-reducer';
import * as Notify from "../../shared/Notify";
import { RootState } from '../../redux';


interface ICartShopProps {
    setLoading: any,
}

const CartShop = (props: ICartShopProps) => {
    const { setLoading } = props;
    const { t } = useTranslation();
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state?.cart?.cartList);

    useEffect(() => {
        setShippingFee(10);
        setLoading(true);
        productApi.getCart({}).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                let data: ICartResponse = res?.data;
                dispatch(updateCart(data?.payload));
            } else {
                Notify.error(res?.data?.message);
            }
        })
    }, []);

    useEffect(() => {
        if (cart)
        setSubTotalPrice(cart.map((item) => Number(item.price) * item.quantity).reduce((first, second) => first + second, 0));
    }, [cart]);
    

    return (
        <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table text-center mb-0 border">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th>{t('products')}</th>
                            <th>{t('price')}</th>
                            <th>{t('quantity')}</th>
                            <th>{t('total')}</th>
                            <th>{t('remove')}</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {
                            cart && cart.map((item: ICartProduct, index) => {
                                return item && <tr>
                                <td className="align-middle"><img src={item?.image ?? DefaultAssets.PRODUCT_IMAGE_LINK} alt={item.name} style={{width: 50}}/> Colorful Stylish Shirt</td>
                                <td className="align-middle">${formatNumber(Number(item.price), 2)}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto" style={{width: 100}}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus" >
                                            <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantity}/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">${formatNumber(item.quantity * Number(item.price), 2)}</td>
                                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                <form className="mb-5" action="">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Coupon Code"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">{t('applyCoupon')}</button>
                        </div>
                    </div>
                </form>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">{t('cartSummary')}</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">{t('subTotal')}</h6>
                            <h6 className="font-weight-medium">${subTotalPrice}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">{t('shipping')}</h6>
                            <h6 className="font-weight-medium">${shippingFee}</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">{t('total')}</h5>
                            <h5 className="font-weight-bold">${subTotalPrice + shippingFee}</h5>
                        </div>
                        <button className="btn btn-block btn-primary my-3 py-3">{t('proceedToCheckout')}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default memo(CartShop)