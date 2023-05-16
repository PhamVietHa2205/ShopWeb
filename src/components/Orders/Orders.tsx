import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/index';
import { useState, useEffect, memo } from 'react';
import orderApi from '../../api/order-api';
import { DefaultAssets, HttpCode, LocalStorageKey } from '../../constants/key_local';
import { useDispatch, useSelector } from 'react-redux';
import * as Notify from "../../shared/Notify";
import { RootState } from '../../redux';
import { IOrderProduct, IOrderResponse } from '../../interfaces/order-interface';
import { updateOrderList } from '../../redux/reducers/order-reducer';


interface IOrdersProps {
    setLoading: any,
}

const Orders = (props: IOrdersProps) => {
    const { setLoading } = props;
    const { t } = useTranslation();
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const orderList = useSelector((state: RootState) => state?.order?.orderList);
    const [orderListUpdate, setOrderListUpdate] = useState(orderList);

    useEffect(() => {
        setLoading(true);
        orderApi.getListOrder({}).then((res) => {
            setLoading(false);
            console.log('res', res);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                let data: IOrderResponse = res?.data;
                dispatch(updateOrderList(data?.payload?.detail));
                setOrderListUpdate(data?.payload?.detail);
            } else {
                Notify.error(res?.data?.message);
            }
        })
    }, []);

    useEffect(() => {
        if (orderListUpdate)
        setSubTotalPrice(orderListUpdate.map((item) => Number(item.price) * item.quantity).reduce((first, second) => first + second, 0));
    }, [orderListUpdate]);
    
    // const sendPurchaseOrder = () => {
    //     if (!(orderListUpdate && orderListUpdate.length > 0)) {
    //         Notify.error(t("noOrder")!);
    //         return;
    //     }
    //     setLoading(true);
    //     const param = {
    //         detail: orderListUpdate.map((item: IOrderProduct) => {
    //         return {idProduct: item.id_product, quantity: item.quantity}
    //         })
    //     }
    //     orderApi.postOrder(param).then((res) => {
    //         setLoading(false);
    //         if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
    //             Notify.success(t("purchaseSuccessfully"));
    //             productApi.editOrder({detail: []}).then((res) => {
    //                 if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
    //                 } else {
    //                     Notify.error(res?.data?.message)
    //                 }
    //             })
    //             clearOrder();
    //         } else {
    //             Notify.error(res?.data?.message);
    //         }
    //     })
    // }

    const clearOrder = () => {
        setOrderListUpdate([]);
        dispatch(updateOrderList([]));
        localStorage.setItem(LocalStorageKey.ORDER_LIST, "[]");
    }

    return (
        <>
        <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col table-responsive mb-5">
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
                            orderListUpdate && orderListUpdate.length > 0 ? orderListUpdate.map((item: IOrderProduct, index) => {
                                return item && <tr>
                                <td className="align-middle text-left"><img src={item?.image ?? DefaultAssets.PRODUCT_IMAGE_LINK} alt={item.name} style={{width: 50}}/> {item?.name}</td>
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
                            }) : <tr>
                            <td className="text-center container-fluid" colSpan={12}>{t("noOrderInList")}</td>
                        </tr>
                        }
                    </tbody>
                </table>
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
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">{t("purchase")}</button>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default memo(Orders)