import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminShopApi from "../api/admin/shop-api";
import { useEffect, useState } from "react";
import { IAdminGetShopResponse } from "../interfaces/admin-interface";
export function ShopManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    useEffect(() => {
        adminShopApi.getShoptList({}).then((res: any) => {
            const data: IAdminGetShopResponse = res?.data;
            setRecord(data.payload.shops)
        });
    }, []);

    const [shopRecord, setRecord] = useState([]);
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
                                    <h6>Shop table</h6>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên</th>
                                                    <th className="text-center text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7 ">Địa chỉ</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    shopRecord.map((item, index) => {
                                                        return <tr key={item.id}>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img src={item.logo} className="avatar avatar-sm me-3" alt="shop" />
                                                                    </div>

                                                                    <h6 className="mb-0 text-sm">{item.name}</h6>


                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-center ">
                                                                <span className="text-secondary text-xs font-weight-bold">{item.address}</span>
                                                            </td>

                                                            <td className="align-middle  text-center">
                                                                <a href={`shop/${item.id}`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
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