import { useState, useEffect, memo } from 'react';
const UserStatistic = () => {
    const userTable = [
        {
            avatar: "logo-xd.svg",
            name: "Bố mày đây",
            listImageProduct: 150,
            quantity: 1,
            orderNumber: 214,
        },
        {
            avatar: "logo-atlassian.svg",
            name: "Bố mày đây",
            listImageProduct: 150,
            quantity: 1,
            orderNumber: 214,
        },
        {
            avatar: "logo-slack.svg",
            name: "Bố mày đây",
            listImageProduct: 150,
            quantity: 1,
            orderNumber: 214,
        },
        {
            avatar: "logo-spotify.svg",
            name: "Bố mày đây",
            listImageProduct: 150,
            quantity: 1,
            orderNumber: 214,
        },
        {
            avatar: "logo-jira.svg",
            name: "Bố mày đây",
            listImageProduct: 150,
            quantity: 1,
            orderNumber: 214,
        },
        {
            avatar: "logo-invision.svg",
            name: "Bố mày đây",
            listImageProduct: 150,
            quantity: 1,
            orderNumber: 214,
        },
    ]
    return (
        <div className="row my-4">
            <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                <div className="card">
                    <div className="card-header pb-0">
                        <div className="row">
                            <div className="col-lg-6 col-7">
                                <h6>Projects</h6>
                                <p className="text-sm mb-0">
                                    <i className="fa fa-check text-info" aria-hidden="true"></i>
                                    <span className="font-weight-bold ms-1">30 done</span> this month
                                </p>
                            </div>
                            <div className="col-lg-6 col-5 my-auto text-end">
                                <div className="dropdown float-lg-end pe-4">
                                    <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-ellipsis-v text-secondary"></i>
                                    </a>
                                    <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                                        <li><a className="dropdown-item border-radius-md" href="javascript:;">Hôm nay</a></li>
                                        <li><a className="dropdown-item border-radius-md" href="javascript:;">7 ngày trước</a></li>
                                        <li><a className="dropdown-item border-radius-md" href="javascript:;">Tùy chỉnh</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên người dùng</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Loại sản phẩm bán </th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hàng tồn kho</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Số đơn hàng</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        userTable.map((item, index) => {
                                            return <tr>
                                                <td>
                                                    <div className="d-flex px-2 py-1">
                                                        <div>
                                                            <img style={{ width: 40, height: 40 }} src={require(`../../assets/img/small-logos/${item.avatar}`)} alt='mySvgImage' />
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="mb-0 text-sm">{item.name}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-group mt-2">
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                            <img src={require("../../assets/img/team-1.jpg")} alt="team1" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                                            <img src={require("../../assets/img/team-2.jpg")} alt="team2" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                                            <img src={require("../../assets/img/team-3.jpg")} alt="team3" />
                                                        </a>
                                                        <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                                            <img src={require("../../assets/img/team-4.jpg")} alt="team4" />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center text-sm">
                                                    <span className="text-xs font-weight-bold">{item.quantity} </span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <span className="text-xs font-weight-bold">{item.orderNumber} </span>
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
            <div className="col-lg-4 col-md-6">
                <div className="card h-100">
                    <div className="card-header pb-0">
                        <h6>Orders overview</h6>
                        <p className="text-sm">
                            <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                            <span className="font-weight-bold">24%</span> this month
                        </p>
                    </div>
                    <div className="card-body p-3">
                        <div className="timeline timeline-one-side">
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="ni ni-bell-55 text-success text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="ni ni-html5 text-danger text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="ni ni-cart text-info text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="ni ni-credit-card text-warning text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                                </div>
                            </div>
                            <div className="timeline-block mb-3">
                                <span className="timeline-step">
                                    <i className="ni ni-key-25 text-primary text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                                </div>
                            </div>
                            <div className="timeline-block">
                                <span className="timeline-step">
                                    <i className="ni ni-money-coins text-dark text-gradient"></i>
                                </span>
                                <div className="timeline-content">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(UserStatistic);