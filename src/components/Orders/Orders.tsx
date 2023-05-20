import { useTranslation } from 'react-i18next';
import { formatDate, formatNumber } from '../../utils/index';
import { useState, useEffect, memo } from 'react';
import orderApi from '../../api/order-api';
import { HttpCode, LocalStorageKey } from '../../constants/key_local';
import { useDispatch, useSelector } from 'react-redux';
import * as Notify from "../../shared/Notify";
import { RootState } from '../../redux';
import { IOrder, IOrderListResponse, IOrderProduct } from '../../interfaces/order-interface';
import { updateOrderList } from '../../redux/reducers/order-reducer';
import ModalStatus from './ModalStatus';
import ModalComment from './ModalComment';


interface IOrdersProps {
    setLoading: any,
}

const Orders = (props: IOrdersProps) => {
    const { setLoading } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const orderList = useSelector((state: RootState) => state?.order?.orderList);
    const [orderListUpdate, setOrderListUpdate] = useState(orderList);
    const [curOrderId, setCurOrderId] = useState("");
    const [curProductId, setCurProductId] = useState("");
    const [curNameProduct, setCurNameProduct] = useState("");
    const [curStatus, setCurStatus] = useState("");
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);

    useEffect(() => {
        getListOrder();
    }, []);

    const getListOrder = () => {
        setLoading(true);
        orderApi.getListOrder({}).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                let data: IOrderListResponse = res?.data;
                dispatch(updateOrderList(data?.payload?.orders));
                setOrderListUpdate(data?.payload?.orders);
            } else {
                Notify.error(res?.data?.message);
            }
        })
    }

    const handleChangeStatus = (id: string, status: string) => {
        setCurOrderId(id);
        setCurStatus(status);
        setShowStatusModal(true);
    }

    const handleShowCommentModal = (orderId: string, productId: string, nameProduct: string) => {
        setCurOrderId(orderId);
        setCurProductId(productId);
        setCurNameProduct(nameProduct);
        setShowCommentModal(true);
    }

    const handleSubmitStatusModal = () => {
        let param = {
            idOrder: curOrderId,
            status: curStatus,
        }
        setLoading(true);
        orderApi.editOrder(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                Notify.success(t("success"));
            } else {
                Notify.error(res?.data?.message);
            }
        })
        setShowStatusModal(false);
        clearOrder();
        getListOrder();
    }

    const handleCloseStatusModal = () => {
        setShowStatusModal(false);
    }

    const handleCloseCommentModal = () => {
        setShowCommentModal(false);
    }

    const clearOrder = () => {
        setOrderListUpdate([]);
        dispatch(updateOrderList([]));
        localStorage.setItem(LocalStorageKey.ORDER_LIST, "[]");
    }

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 mb-3">
                    <h4 className='col text-center bg-secondary py-3 fw-bold'>{t('listOrder')}</h4>
                    <table className='table table-hover'>
                        <thead>
                            <tr className='text-center text-white'>
                                <th className='bg-primary'></th>
                                <th className='bg-primary'>{t('time')}</th>
                                <th className='bg-primary'>{t('status')}</th>
                                <th className='bg-primary'>{t('payment')}</th>
                                <th className='bg-primary'>{t('action')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderListUpdate && orderListUpdate.length > 0 && orderListUpdate.map((order: IOrder, index) => {
                                    return <>
                                        <tr className='text-center bg-secondary' data-bs-toggle="collapse" data-bs-target={`#order-${index}`}>
                                            <td>{index}</td>
                                            <td>{formatDate(order?.date)}</td>
                                            <td className='text-capitalize'>{t(order?.status)}</td>
                                            <td className='text-capitalize'>{order?.payment ? t("paid") : t("notPaid")}</td>
                                            <td>
                                                <div>
                                                    <button className='btn mr-2' data-bs-toggle="dropdown" data-bs-target={`#statusList-${index}`}><i className="fa fa-edit text-dark"></i></button>
                                                    <div className="dropdown-menu" id={`statusList-${index}`} aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#" onClick={() => handleChangeStatus(order?.id, "done")}>{t('done')}</a>
                                                        <a className="dropdown-item" href="#" onClick={() => handleChangeStatus(order?.id, "cancel")}>{t('cancel')}</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-center collapse" id={`order-${index}`}>
                                            <td colSpan={12} className='px-0 py-0'>
                                                <table className='table'>
                                                    <thead>
                                                        <tr className='text-white' style={{ backgroundColor: "lightgrey" }}>
                                                            <th>{t('name')}</th>
                                                            <th>{t('quantity')}</th>
                                                            <th>{t('price')} (VNĐ)</th>
                                                            <th>{t('rating')}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            order?.detail?.map((product: IOrderProduct) => {
                                                                return <tr>
                                                                    <td className='text-capitalize'>{product?.nameProduct}</td>
                                                                    <td>{product?.quantity}</td>
                                                                    <td>{product?.price}</td>
                                                                    <td><button className='btn' onClick={() => handleShowCommentModal(product?.id_order, product?.id, product?.nameProduct)}><i className="fa fa-star"></i></button>
                                                                    </td>
                                                                </tr>
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalStatus showStatusModal={showStatusModal} handleCloseStatusModal={handleCloseStatusModal} curStatus={curStatus} handleSubmitStatusModal={handleSubmitStatusModal} />
            <ModalComment showCommentModal={showCommentModal} handleCloseCommentModal={handleCloseCommentModal} idOrder={curOrderId} idProduct={curProductId} nameProduct={curNameProduct} setLoading={(setLoading)}/>
        </>
    )
}
export default memo(Orders)