import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
export function UserManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    const userRecord = [
        {
            avatar: "team-2.jpg",
            email: "huukien@gmail.com",
            name: "Bố mày đây",
            status: 1,
            quantity: 1,
            orderNumber: 214,
            role: 1,
            created: '14/2/2023'
        },
        {
            avatar: "team-3.jpg",
            email: "huukien@gmail.com",
            name: "Bố mày đây",
            status: 1,
            quantity: 1,
            orderNumber: 214,
            role: 2,
            created: '14/2/2023'
        },
        {
            avatar: "team-4.jpg",
            email: "huukien@gmail.com",
            name: "Bố mày đây",
            status: 1,
            quantity: 1,
            orderNumber: 214,
            role: 1,
            created: '14/2/2023'
        },
        {
            avatar: "team-4.jpg",
            email: "huukien@gmail.com",
            name: "Bố mày đây",
            status: 0,
            quantity: 1,
            orderNumber: 214,
            role: 2,
            created: '14/2/2023'
        },
        {
            avatar: "team-3.jpg",
            email: "huukien@gmail.com",
            name: "Bố mày đây",
            status: 0,
            quantity: 1,
            orderNumber: 214,
            role: 1,
            created: '14/2/2023'
        },
        {
            avatar: "team-2.jpg",
            email: "huukien@gmail.com",
            name: "Bố mày đây",
            status: 0,
            quantity: 2,
            orderNumber: 214,
            role: 2,
            created: '14/2/2023'
        },
    ]
    return (
        <>
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header />
                <div className="container-fluid py-4">
                    <div>
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
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Vai trò</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Ngày tạo</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        userRecord.map((item, index) => {
                                                            return <tr>
                                                                <td>
                                                                    <div className="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={require(`../assets/img/${item.avatar}`)} className="avatar avatar-sm me-3" alt="user1" />
                                                                        </div>
                                                                        <div className="d-flex flex-column justify-content-center">
                                                                            <h6 className="mb-0 text-sm">{item.name}</h6>
                                                                            <p className="text-xs text-secondary mb-0">{item.email}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item.role == 1 && <p className="text-xs font-weight-bold mb-0">Admin</p>
                                                                    }
                                                                    {
                                                                        item.role == 2 && <p className="text-xs font-weight-bold mb-0">Người dùng</p>
                                                                    }

                                                                </td>
                                                                <td className="align-middle text-center text-sm">
                                                                    {
                                                                        item.status == 1 && <span className="badge badge-sm bg-gradient-success">Online</span>
                                                                    }
                                                                    {
                                                                        item.status == 0 && <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                                                                    }
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    <span className="text-secondary text-xs font-weight-bold">{item.created}</span>
                                                                </td>
                                                                <td className="align-middle  text-center">
                                                                    <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
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
                </div>
            </main>

        </>
    )
}