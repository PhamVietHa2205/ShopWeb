import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import authorApi from "../api/author-api";
import { useEffect, useState } from "react";
import { IAdminGetUserResponse } from "../interfaces/admin-interface";
export function UserManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');

    useEffect(() => {
        authorApi.getUser().then((res: any) => {
            const data: IAdminGetUserResponse = res?.data;
            setRecord(data.payload.users)
        });
    }, []);

    const [userRecord, setRecord] = useState([]);
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
                                    <h6>Authors table</h6>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên</th>
                                                    <th className="text-center text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7 ">Số điện thoại</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Giới tính</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">Vai trò</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Số shop sở hữu</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    userRecord.map((item, index) => {
                                                        return <tr key={item.id}>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img src={item.avatar} className="avatar avatar-sm me-3" alt="user" />
                                                                    </div>
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <h6 className="mb-0 text-sm">{item.fullname}</h6>
                                                                        <p className="text-xs text-secondary mb-0">{item.email}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-center ">
                                                                <span className="text-secondary text-xs font-weight-bold">{item.phone}</span>
                                                            </td>
                                                            <td className="align-middle text-center text-sm">
                                                                {
                                                                    item.gender == 'male' && <span className="badge badge-sm bg-gradient-info">Nam</span>
                                                                }
                                                                {
                                                                    item.gender == 'female' && <span className="badge badge-sm bg-gradient-warning">Nữ</span>
                                                                }
                                                                {
                                                                    item.gender == 'other' && <span className="badge badge-sm bg-gradient-secondary">Khác</span>
                                                                }
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <p className="text-xs font-weight-bold mb-0">{item.role}</p>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{item.numberShop}</span>
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