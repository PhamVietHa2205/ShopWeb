import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminOrderApi from "../api/admin/order-api";
import { useEffect, useState } from "react";
import { IAdminGetOrderResponse, IOrderInformation } from "../interfaces/admin-interface";
import { HttpCode } from '../constants/key_local';
import * as Notify from "../shared/Notify";
import { useLocation } from 'react-router-dom'
import { formatDate } from '../utils/index';
import Loading from "../shared/Loading";
import { Modal } from "react-bootstrap"
export function OrderManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation()
    const router = location?.pathname.split("/").splice(1)
    useEffect(() => {
        getOrderList()
    }, []);
    const getOrderList = () => {
        setIsLoading(true);
        adminOrderApi.getOrdertList({}).then((res: any) => {
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                const data: IAdminGetOrderResponse = res?.data;
                setRecord(data.payload.orders)
            } else {
                Notify.error(res?.data?.message);
            }
            setIsLoading(false)
        });
    }
    const [orderRecord, setRecord] = useState([]);
    const statusOrder = ["cancel", "done"];
    const [orderPram, setOrderParam] = useState<IOrderInformation>();
    const [stateModal, setModal] = useState(false)
    const getDetailOrder = (id: any) => {
        setIsLoading(true);
        setOrderParam(orderRecord.find(i => i.id === id))
        setModal(true)
        setIsLoading(false)
    }
    const updateData = (e: any) => {
        if (e.target.type == 'checkbox') {
            setOrderParam({
                ...orderPram,
                [e.target.name]: e.target.checked
            })
        } else
            setOrderParam({
                ...orderPram,
                [e.target.name]: e.target.value
            })
    }
    const submit = (e: any) => {
        e.preventDefault()
        let param = {
            status: orderPram.status,
            payment: orderPram.payment,
        }
        setIsLoading(true)
        adminOrderApi.editOrder(orderPram.id, param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(res?.data?.message)
                getOrderList()
                setModal(false)
            } else {
                Notify.error(res?.data?.message)
            }
        })
        setIsLoading(false)
    }
    return (
        <>
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header router={router} />
                <div className="container-fluid py-4">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Order table</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr className="text-secondary text-xxs font-weight-bolder opacity-7 text-uppercase">
                                            <th >Người mua</th>
                                            <th >Đơn hàng</th>
                                            <th className="text-center">Trạng thái đơn hàng</th>
                                            <th className="text-center ">Ngày đặt</th>
                                            <th className="text-center">Trạng thái giao hàng</th>
                                            <th className="text-center">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orderRecord.map((item, index) => {
                                                return <tr key={item.id}>
                                                    <td >
                                                        <div className="d-flex align-items-center px-2 py-1">
                                                            <div>
                                                                <img src={item.avatar} className="avatar avatar-sm me-3" alt="user" />
                                                            </div>
                                                            <h6 className="mb-0 text-sm">{item.nameBuyer}</h6>
                                                        </div>

                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            {item.detail.map((productOrdered: any) => {
                                                                return <div key={productOrdered.id}>
                                                                    {productOrdered.name}
                                                                </div>
                                                            })}
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        {
                                                            item.status == 'done' && <span className="badge badge-sm bg-gradient-success">Đã đặt</span>
                                                        }
                                                        {
                                                            item.status == 'cancel' && <span className="badge badge-sm bg-gradient-secondary">Bị Hủy</span>
                                                        }
                                                        {
                                                            item.status == 'watting' && <span className="badge badge-sm bg-gradient-info">Đang chờ</span>
                                                        }
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <p className="text-xs font-weight-bold mb-0">{formatDate(item.date)}</p>
                                                    </td>

                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">{item.payment ? 'Đã giao' : 'Chưa giao'}</span>
                                                    </td>
                                                    <td className="align-middle  text-center">
                                                        {item.status == 'watting' && <div className="text-secondary font-weight-bold text-xs" onClick={() => getDetailOrder(item.id)}>
                                                            Edit
                                                        </div>}
                                                    </td>
                                                    <Modal show={stateModal} centered>
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Chỉnh sửa đơn hàng</h5>
                                                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setModal(false)}> </button>
                                                            </div>
                                                            <form className="modal-body" onSubmit={submit}>
                                                                <div className="form-check form-switch ps-0">
                                                                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0">Trạng thái đơn hàng</label>
                                                                    <select className="align-self-center form-select mb-4" name="status" onChange={updateData}>
                                                                        {statusOrder.map((status) => {
                                                                            return status === orderPram?.status ? <option selected value={status}>{status}</option> : <option value={status}>{status}</option>
                                                                        })}
                                                                    </select>
                                                                </div>
                                                                <div className="form-check form-switch ps-0">
                                                                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0">Trạng thái nhận hàng</label>
                                                                    <input className="form-check-input ms-auto" type="checkbox" checked={orderPram?.payment} name="payment" onChange={updateData} />
                                                                </div>
                                                            </form>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" onClick={() => setModal(false)}>Đóng</button>
                                                                <button type="button" className="btn btn-primary" onClick={submit}>Lưu đơn hàng</button>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                </tr>

                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Loading loading={isLoading} />
                    <Footer />
                </div>
            </main>

        </>
    )
}