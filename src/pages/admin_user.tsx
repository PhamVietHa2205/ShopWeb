import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminUserApi from "../api/admin/user-api"
import { useEffect, useState } from "react";
import { IAdminGetUserResponse, IAdminGetDetailUserResponse, IUserInformation } from "../interfaces/admin-interface";
import { HttpCode } from '../constants/key_local';
import * as Notify from "../shared/Notify";
export function UserManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');

    useEffect(() => {
        getUserList()
    }, []);
    const getUserList = () => {
        adminUserApi.getUsertList({}).then((res: any) => {
            const data: IAdminGetUserResponse = res?.data;
            setRecord(data.payload.users)
        });
    }
    const [userRecord, setRecord] = useState([]);
    const [user, setUser] = useState<IUserInformation>();
    const genderUser = ["male", "female", "other"];
    const getDetailUser = (id: any) => {
        let params = {
            id: id,
        }
        adminUserApi.getDetailUser(params).then(res => {
            let data: IAdminGetDetailUserResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setUser(data?.payload);
            } else {
                Notify.error(data?.message);
            }
        })
    }
    const updateData = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const convertBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    const handleFileRead = async (event: any) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setUser({
            ...user,
            avatar: String(base64)
        })
    }
    const submit = (e: any) => {
        e.preventDefault()
        let param = {
            fullname: user.fullname,
            phone: user.phone,
            avatar: user.avatar,
            gender: user.gender,
            numberShop: user.numberShop,
        }
        adminUserApi.editUser(user.id, param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(res?.data?.message)
                getUserList()
            } else {
                Notify.error(res?.data?.message)
            }
        })
    }
    return (
        <>
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header />
                <div className="container-fluid py-4">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>User table</h6>
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
                                                        <a href={`user/${item.id}`} className="text-secondary font-weight-bold text-xs" data-bs-toggle="modal" data-bs-target="#editUser" onClick={() => getDetailUser(item.id)} >
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal fade" id="editUser" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Are you sure save change</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className=' mx-auto  mb-4' onSubmit={submit}>
                                                <div className="form-group">
                                                    <label >Tên người dùng</label>
                                                    <input name="fullname" type="text" className="form-control" onChange={updateData} placeholder="Enter name user" value={user?.fullname} />
                                                </div>
                                                <div className="form-group">
                                                    <label >Số điện thoại</label>
                                                    <input name="phone" type="number" className="form-control" onChange={updateData} placeholder="Phone Number" value={user?.phone} />
                                                </div>
                                                <div className="form-group">
                                                    <label >Giới tính</label>
                                                    <select className="align-self-center form-select mb-4" name="gender" onChange={updateData}>
                                                        {genderUser.map((status) => {
                                                            return status === user?.gender ? <option selected value={status}>{status}</option> : <option value={status}>{status}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label >Số lượng shop</label>
                                                    <input name="numberShop" type="number" className="form-control" onChange={updateData} disabled={user?.role == 'seller' ? false : true} placeholder="Number Shop" value={user?.numberShop} />
                                                </div>
                                                <div className="form-group d-flex  flex-column">
                                                    <label>Avatar</label>
                                                    <input type="file" className="form-control-file" onChange={e => handleFileRead(e)} />
                                                    <img alt="error_image" className="w-50 rounded-circle border align-self-center" src={user?.avatar}></img>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                                        </div>
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