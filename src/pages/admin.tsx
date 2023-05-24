import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import { useEffect, useState } from "react";
import adminProductApi from "../api/admin/product-api";
import { IAdminGetHotProductResponse, IHotProduct } from "../interfaces/admin-interface";
import { useLocation } from 'react-router-dom'
import Loading from "../shared/Loading";
export function Admin() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    const location = useLocation()
    const router = location?.pathname.split("/").splice(1)
    const [productRecord, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getShoptList()
    }, []);
    const getShoptList = () => {
        adminProductApi.getHotProduct({}).then((res: any) => {
            setIsLoading(true);
            const data: IAdminGetHotProductResponse = res?.data;
            setProduct(data?.payload)
            setIsLoading(false)
        });
    }
    return (
        <>
            {/* <!-- Navbar --> */}
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                {/* <!-- Header --> */}
                <Header router={router} />
                {/* <!-- Content --> */}
                <div className="container-fluid py-4">
                    {/* <ProfitStatistics /> */}
                    <div className="container-fluid py-4">

                        <div className="card-header pb-0">
                            <h6>Sản phẩm bán chạy</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        <th className="">Tên shop</th>
                                        <th className="text-center ">Loại sản phẩm bán </th>
                                        <th className=" text-center">Ảnh minh họa sản phẩm</th>
                                        <th className="text-center ">Hàng tồn kho</th>
                                        <th className="text-center ">Hàng đã bán</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        productRecord.map((item, index) => {
                                            return <tr key={item.id}>
                                                <td>
                                                    <div className="d-flex align-items-center px-2 py-1">
                                                        <div>
                                                            <img src={item?.logo} className="avatar avatar-sm me-3" alt="shop" />
                                                        </div>
                                                        <h6 className="mb-0 text-sm">{item?.nameShop}</h6>
                                                    </div>
                                                    {/* <div className="d-flex px-2 py-1">
                                                        <div>
                                                            <img style={{ width: 40, height: 40 }} src={item?.logo} alt='mySvgImage' />
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="mb-0 text-sm">{item?.nameShop}</h6>
                                                        </div>
                                                    </div> */}
                                                </td>
                                                <td className="align-middle text-center ">
                                                    <span className="text-secondary text-xs font-weight-bold">{item.name}</span>
                                                </td>
                                                <td className="align-middle text-center ">
                                                    <div className="avatar-group mt-2">
                                                        {item?.images?.map((item, index) => {
                                                            return <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                                <img src={item} alt="team1" />
                                                            </a>
                                                        })
                                                        }
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center text-sm">
                                                    <span className="text-xs font-weight-bold">{item.quantity} </span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <span className="text-xs font-weight-bold">{item.quantityBeSold} </span>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>

                            </table>

                        </div>
                    </div>
                    <Loading loading={isLoading} />
                    <Footer />
                </div>
            </main>

        </>
    )
}