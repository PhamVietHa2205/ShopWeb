import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import { RootState } from "../redux";
import { useSelector } from "react-redux";
import { IUserInformation } from "../interfaces/author-interface";
export function ProfileManger() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    const userInfo: IUserInformation = useSelector((state: RootState) => state.userInfo);
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
                                    <img src={userInfo?.avatar} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        {userInfo?.fullname}
                                    </h5>
                                    <p className="mb-0 font-weight-bold text-sm">
                                        {userInfo?.role}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative end-0">
                                    <ul className="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" href="#" role="tab" aria-selected="true">
                                                <span className="ms-1">App</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">

                                                <span className="ms-1">Messages</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                                                <span className="ms-1">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Platform Settings</h6>
                                </div>
                                <div className="card-body p-3">
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" >Email me when someone follows me</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0">Email me when someone answers on my post</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 px-0">
                                            <div className="form-check form-switch ps-0">
                                                <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked />
                                                <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0">Email me when someone mentions me</label>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <div className="row">
                                        <div className="col-md-8 d-flex align-items-center">
                                            <h6 className="mb-0">Profile Information</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <a href="#">
                                                <i className="fa fa-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; {userInfo?.fullname} </li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Phone:</strong> &nbsp; {userInfo?.phone}</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {userInfo?.email}</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Gender:</strong> &nbsp; {userInfo?.gender}</li>
                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Number Shop:</strong> &nbsp; {userInfo?.numberShop}</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Conversations</h6>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/kal-visuals-square.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Sophie B.</h6>
                                                <p className="mb-0 text-xs">Hi! I need more information..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/marie.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Anne Marie</h6>
                                                <p className="mb-0 text-xs">Awesome work, can you..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/ivana-square.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Ivanna</h6>
                                                <p className="mb-0 text-xs">About files I can..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/team-4.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Peterson</h6>
                                                <p className="mb-0 text-xs">Have a great afternoon..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="#">Reply</a>
                                        </li>
                                        <li className="list-group-item border-0 d-flex align-items-center px-0">
                                            <div className="avatar me-3">
                                                <img src="../assets/img/team-3.jpg" alt="kal" className="border-radius-lg shadow" />
                                            </div>
                                            <div className="d-flex align-items-start flex-column justify-content-center">
                                                <h6 className="mb-0 text-sm">Nick Daniel</h6>
                                                <p className="mb-0 text-xs">Hi! I need more information..</p>
                                            </div>
                                            <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="#">Reply</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </main>
        </>
    )
}