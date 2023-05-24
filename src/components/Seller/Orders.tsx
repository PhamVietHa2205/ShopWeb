import { useTranslation } from 'react-i18next';
import { formatDate, formatNumber } from '../../utils/index';
import { useState, useEffect, memo } from 'react';
import orderApi from '../../api/seller/order-api';
import { HttpCode, LocalStorageKey } from '../../constants/key_local';
import { useDispatch, useSelector } from 'react-redux';
import * as Notify from "../../shared/Notify";
import { RootState } from '../../redux';
import { IOrder, IOrderListResponse, IOrderProduct } from '../../interfaces/order-interface';
import { updateOrderList } from '../../redux/reducers/order-reducer';
import { useLocation } from 'react-router-dom';
import ModalStatus from './ModalStatus';

interface IOrdersProps {
    setLoading: any,
}

const Orders = (props: IOrdersProps) => {
    const { setLoading } = props;
    const { state } = useLocation();
    const { idShop, name, logo } = state;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const orderList = useSelector((state: RootState) => state?.order?.orderList);
    const [orderListUpdate, setOrderListUpdate] = useState(orderList);
    const [curOrderId, setCurOrderId] = useState("");
    const [curStatus, setCurStatus] = useState("");
    const [showStatusModal, setShowStatusModal] = useState(false);
    const [curPayment, setCurPayment] = useState(false);

    useEffect(() => {
        getListOrder();
    }, []);

    const getListOrder = () => {
        setLoading(true);
        let param = {
            idShop: idShop,
        }
        orderApi.getListOrder(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                let data: IOrderListResponse = res?.data;
                dispatch(updateOrderList(data?.payload?.orders));
                setOrderListUpdate(data?.payload?.orders);
            } else {
                Notify.error(res?.data?.message);
            }
        })
    }

    const handleChangeStatus = (id: string, status: string, payment: boolean) => {
        setCurOrderId(id);
        setCurStatus(status);
        setShowStatusModal(true);
        setCurPayment(payment);
    }

    const handleSubmitStatusModal = () => {
        let param = {
            idOrder: curOrderId,
            status: curStatus,
        }
        setLoading(true);
        orderApi.editOrder(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
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

    const clearOrder = () => {
        setOrderListUpdate([]);
        dispatch(updateOrderList([]));
        localStorage.setItem(LocalStorageKey.ORDER_LIST, "[]");
    }

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="pb-4 col-6 d-flex align-items-center px-xl-5">
                    <img src={logo} alt={logo} className="rounded-circle mr-4" style={{width: 40, height: 40}}/>
                    <h5 className="fw-bold">{name}</h5>
                </div>
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
                                                        <a className="dropdown-item" href="#" onClick={() => handleChangeStatus(order?.id, "delivering", false)}>{t('delivering')}</a>
                                                        <a className="dropdown-item" href="#" onClick={() => handleChangeStatus(order?.id, "done", true)}>{t('done')}</a>
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
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            order?.detail?.map((product: IOrderProduct) => {
                                                                return <tr>
                                                                    <td className='text-capitalize'>{product?.name}</td>
                                                                    <td>{product?.quantity}</td>
                                                                    <td>{product?.price}</td>
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
        </>
    )
}
export default memo(Orders)