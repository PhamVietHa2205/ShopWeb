import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminOrderApi from "../api/admin/order-api";
import { useEffect, useState } from "react";
import { IAdminGetOrderResponse } from "../interfaces/admin-interface";
export function OrderManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    useEffect(() => {
        adminOrderApi.getOrdertList({}).then((res: any) => {
            const data: IAdminGetOrderResponse = res?.data;
            setRecord(data.payload.orders)
        });
    }, []);
    const [orderRecord, setRecord] = useState([]);
    return (
        <>
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header />
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0">
                                    <h6>Order table</h6>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên</th>
                                                    <th className="text-center text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7 ">ID người mua</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Trạng thái</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">Ngày đặt</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">payment</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orderRecord.map((item, index) => {
                                                        return <tr key={item.id}>
                                                            <td>
                                                                <div className="d-flex flex-column justify-content-center">
                                                                    {item.detail.map((productOrdered: any) => {
                                                                        return <div key={productOrdered.id}>
                                                                            {productOrdered.name}
                                                                        </div>
                                                                    })}
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-center ">
                                                                <span className="text-secondary text-xs font-weight-bold">{item.id_buyer}</span>
                                                            </td>
                                                            <td className="align-middle text-center text-sm">
                                                                {
                                                                    item.status == 'done' && <span className="badge badge-sm bg-gradient-success">Hoàn thành</span>
                                                                }

                                                                {
                                                                    item.status == 'cancel' && <span className="badge badge-sm bg-gradient-secondary">Bị Hủy</span>
                                                                }
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <p className="text-xs font-weight-bold mb-0">{item.date}</p>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{item.payment}</span>
                                                            </td>

                                                            <td className="align-middle  text-center">
                                                                <a href={`user/${item.id}`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                                    Edit
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
            </main>

        </>
    )
}