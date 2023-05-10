import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/index';
import { useState, useEffect, memo } from 'react';
import productApi from '../../api/product-api';
import orderApi from '../../api/order-api';
import { DefaultAssets, HttpCode, LocalStorageKey } from '../../constants/key_local';
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
    const [cartListUpdate, setCartListUpdate] = useState(cart);

    useEffect(() => {
        setShippingFee(10);
        setLoading(true);
        productApi.getCart({}).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                let data: ICartResponse = res?.data;
                dispatch(updateCart(data?.payload));
                setCartListUpdate(data?.payload);
            } else {
                Notify.error(res?.data?.message);
            }
        })
    }, []);

    useEffect(() => {
        if (cartListUpdate)
        setSubTotalPrice(cartListUpdate.map((item) => Number(item.price) * item.quantity).reduce((first, second) => first + second, 0));
    }, [cartListUpdate]);
    
    const sendPurchaseOrder = () => {
        if (!(cartListUpdate && cartListUpdate.length > 0)) {
            Notify.error(t("noItemInCart")!);
            return;
        }
        setLoading(true);
        const param = {
            detail: cartListUpdate.map((item: ICartProduct) => {
            return {idProduct: item.id_product, quantity: item.quantity}
            })
        }
        orderApi.postOrder(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                Notify.success(t("purchaseSuccessfully"));
                productApi.editCart({detail: []}).then((res) => {
                    if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                    } else {
                        Notify.error(res?.data?.message)
                    }
                })
                clearCart();
            } else {
                Notify.error(res?.data?.message);
            }
        })
    }

    const clearCart = () => {
        setCartListUpdate([]);
        dispatch(updateCart([]));
        localStorage.setItem(LocalStorageKey.CART, "[]");
    }

    const handleIncrease = (id: string) => {
        let newCartList = cartListUpdate.map((item) => item.id_product === id ? {...item, quantity: item.quantity + 1} : item);
        setCartListUpdate(newCartList);
    }

    const handleDecrease = (id: string) => {
        let newCartList = cartListUpdate.map((item) => item.id_product === id ? {...item, quantity: item.quantity > 1 ? (item.quantity - 1) : 1} : item);
        setCartListUpdate(newCartList);
    }

    const handleRemove = (id: string) => {
        let newCartList = cartListUpdate.filter((item) => item.id_product !== id);
        setCartListUpdate(newCartList);
    }

    return (
        <>
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
                            cartListUpdate && cartListUpdate.length > 0 ? cartListUpdate.map((item: ICartProduct, index) => {
                                return item && <tr>
                                <td className="align-middle text-left"><img src={item?.image ?? DefaultAssets.PRODUCT_IMAGE_LINK} alt={item.name} style={{width: 50}}/> {item?.name}</td>
                                <td className="align-middle">${formatNumber(Number(item.price), 2)}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto" style={{width: 100}}>
                                        <div className="input-group-btn" onClick={() => handleDecrease(item.id_product)}>
                                            <button className="btn btn-sm btn-primary btn-minus" >
                                            <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantity}/>
                                        <div className="input-group-btn" onClick={() => handleIncrease(item.id_product)}>
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">${formatNumber(item.quantity * Number(item.price), 2)}</td>
                                <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={() => handleRemove(item.id_product)}><i className="fa fa-times"></i></button></td>
                            </tr>
                            }) : <tr>
                            <td className="text-center container-fluid" colSpan={12}>{t("noItemInCart")}</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                <div className="mb-5">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Coupon Code"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">{t('applyCoupon')}</button>
                        </div>
                    </div>
                </div>
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
                        <button className="btn btn-block btn-primary my-3 py-3" data-bs-target="#confirmModal" data-bs-toggle="modal">{t('proceedToCheckout')}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade" id="confirmModal" tabIndex={-1} role="dialog" aria-labelledby="confirmModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="confirmModal">{t('purchase')}?</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {t('confirmPurchaseDescription')}?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('cancel')}</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={sendPurchaseOrder}>{t("purchase")}</button>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default memo(CartShop)