import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import { RootState } from "../redux";
import { useSelector } from "react-redux";
import { IUserInformation, IAdminGetDetailUserResponse } from "../interfaces/admin-interface";
import { useEffect, useState, useRef } from 'react';
import adminUserApi from "../api/admin/user-api"
import { HttpCode, LocalStorageKey } from '../constants/key_local';
import * as Notify from "../shared/Notify";
export function ProfileManger() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    const userInfo: IUserInformation = useSelector((state: RootState) => state.userInfo);
    const [user, setCurrentUser] = useState<IUserInformation>()
    const [curPassword, setCurPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [editting, setEditting] = useState(false);
    const inputFile = useRef(null)
    useEffect(() => {
        // setCurrentUser(userInfo)
        adminUserApi.getDetailUser({ id: userInfo?.id }).then(res => {
            let data: IAdminGetDetailUserResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setCurrentUser(data?.payload);
            } else {
                Notify.error(data?.message);
            }
        })
    }, []);
    const updateData = (e: any) => {
        setCurrentUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };
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
        await adminUserApi.changeProfile({ avatar: String(base64) }).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                setCurrentUser({
                    ...user,
                    avatar: res?.data?.payload?.avatar
                })
                localStorage.setItem(LocalStorageKey.USER_INFO, JSON.stringify(user));
                Notify.success('Cập nhật ảnh đại diện thành công')
            } else {
                Notify.error(res?.data?.message)
            }
        })
    }
    const submit = (e: any) => {
        e.preventDefault()
        let param = {
            fullname: user?.fullname,
            phone: user?.phone,
            gender: user?.gender
        }
        adminUserApi.changeProfile(param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success('Cập nhật trang cá nhân thành công')
                setEditting(false);
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
                <div className="container-fluid">
                    <div className="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: `url(${require('../assets/img/curved-images/curved-10.jpg')})` }}>
                        <span className="mask bg-gradient-primary opacity-6"></span>
                    </div>
                    <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
                        <div className="row gx-4">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src={user?.avatar} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                                    <i className="fa fa-camera text-sm ms-1" aria-hidden="true" style={{ position: "absolute", bottom: '0', cursor: 'pointer' }} onClick={onButtonClick}></i>
                                </div>
                                <input ref={inputFile} type="file" accept="image/*" className="form-control-file d-none" onChange={e => handleFileRead(e)} />
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        {user?.fullname}
                                    </h5>
                                    <p className="mb-0 font-weight-bold text-sm">
                                        {user?.role}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Platform Settings</h6>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input type="password" value={curPassword} className="form-control" placeholder="Password" aria-label="Password" />
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" />
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <div className="row">
                                        <div className="col-md-8 d-flex align-items-center">
                                            <h6 className="mb-0">Profile Information</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <i className="fa fa-edit text-secondary text-sm" title="Edit Profile" onClick={() => setEditting(true)}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    {!editting && <ul className="list-group">
                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; {user?.fullname} </li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Phone:</strong> &nbsp; {user?.phone}</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {user?.email}</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Gender:</strong> &nbsp; {user?.gender}</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Number Shop:</strong> &nbsp; {user?.numberShop}</li>
                                    </ul>}
                                    {
                                        editting && <form className="list-group" onSubmit={submit}>
                                            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Phone:</strong>  <input name="fullname" type="text" className="form-control" placeholder="Enter name user" value={user?.fullname} onChange={updateData} /></li>
                                            <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> <input name="phone" type="number" className="form-control" placeholder="Phone Number" value={user?.phone} onChange={updateData} />  </li>
                                            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp;  <input name="email" type="text" className="form-control" placeholder="Enter name user" value={user?.email} onChange={updateData} /></li>
                                            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Gender:</strong> &nbsp; {user?.gender}</li>
                                            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Number Shop:</strong> &nbsp; {user?.numberShop}</li>
                                            <div className="footer">
                                                <button type="button" className="btn btn-secondary mr-3" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                                            </div>
                                        </form>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main >
        </>
    )
}