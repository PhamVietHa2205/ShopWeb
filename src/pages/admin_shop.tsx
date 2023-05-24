import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminShopApi from "../api/admin/shop-api";
import { useEffect, useState } from "react";
import { IAdminGetShopResponse, IAdminGetDetailShopResponse, IDetailShop } from "../interfaces/admin-interface";
import { HttpCode } from '../constants/key_local';
import * as Notify from "../shared/Notify";
import { useNavigate } from "react-router-dom";
export function ShopManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
    useEffect(() => {
        getShoptList()
    }, []);
    const getShoptList = () => {
        adminShopApi.getShoptList({}).then((res: any) => {
            const data: IAdminGetShopResponse = res?.data;
            setRecord(data.payload.shops)
        });
    }
    const [shopRecord, setRecord] = useState([]);
    const [shop, setShop] = useState<IDetailShop>();
    const getDetailShop = (id: any) => {
        let params = {
            id: id,
        }
        adminShopApi.getDetailShop(params).then(res => {
            let data: IAdminGetDetailShopResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setShop(data?.payload);
            } else {
                Notify.error(data?.message);
            }
        })
    }
    const deleteShop = (id: any) => {
        adminShopApi.deleteShop(id).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(res?.data?.message)
                getShoptList()
            } else {
                Notify.error(res?.data?.message)
            }
        });
    }
    const updateData = (e: any) => {
        setShop({
            ...shop,
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
        setShop({
            ...shop,
            logo: String(base64)
        })
    }
    const submit = (e: any) => {
        e.preventDefault()
        let param = {
            name: shop.fullname,
            address: shop.address,
            logo: shop.logo
        }
        adminShopApi.editShop(shop.id, param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(res?.data?.message)
                getShoptList()
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
                    <div className="row">
                        <div className="card mb-4">
                            <div className="card-header d-flex pb-0">
                                <h6 className="mr-auto">Shop table</h6>
                                <button type="button" className="btn btn-labeled btn-info" onClick={() => routeChange('/admin/shop/create')}>
                                    <span className="btn-label mr-2"><i className="fa fa-cart-plus"></i></span>Add Shop</button>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Chủ sở hữu</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên Shop</th>
                                                <th className="text-center text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7 ">Địa chỉ</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                shopRecord.map((item, index) => {
                                                    return <tr key={item.id} >
                                                        <td>
                                                            <div className="d-flex align-items-center px-2 py-1">
                                                                <div>
                                                                    <img src={item.avatar} className="avatar avatar-sm me-3" alt="user" />
                                                                </div>
                                                                <h6 className="mb-0 text-sm">{item.fullname}</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center px-2 py-1">
                                                                <div>
                                                                    <img src={item.logo} className="avatar avatar-sm me-3" alt="shop" />
                                                                </div>
                                                                <h6 className="mb-0 text-sm">{item.name}</h6>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle text-center ">
                                                            <span className="text-secondary text-xs font-weight-bold">{item.address}</span>
                                                        </td>

                                                        <td >
                                                            <div className="d-flex justify-content-center align-items-center  mx-auto">
                                                                <a href={`product/${item.id}`} className="text-secondary font-weight-bold text-xs mr-3"  >
                                                                    Product
                                                                </a>
                                                                <div className="text-secondary font-weight-bold text-xs mr-3" data-bs-toggle="modal" data-bs-target="#editShop" onClick={() => getDetailShop(item.id)}>
                                                                    Edit
                                                                </div>
                                                                <div className="text-secondary font-weight-bold text-xs mr-3" onClick={() => deleteShop(item.id)}>
                                                                    Delete
                                                                </div>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal fade" id="editShop" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Are you sure save change</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className=' mx-auto  mb-4'>
                                                <div className="form-group">
                                                    <label >Chủ sở hữu </label>
                                                    <input name="fullname" type="text" className="form-control" aria-describedby="emailHelp" value={shop?.fullname} />
                                                </div>
                                                <div className="form-group">
                                                    <label >Tên shop</label>
                                                    <input name="shopName" type="text" className="form-control" placeholder="Phone Number" onChange={updateData} value={shop?.shopName} />
                                                </div>
                                                <div className="form-group">
                                                    <label >Địa điểm</label>
                                                    <input name="address" type="text" className="form-control" placeholder="Address" onChange={updateData} value={shop?.address} />
                                                </div>
                                                <div className="form-group d-flex  flex-column">
                                                    <label>Logo</label>
                                                    <input type="file" className="form-control-file" onChange={e => handleFileRead(e)} />
                                                    <img className=" w-50 rounded-circle  align-self-center" src={shop?.logo}></img>
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