import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminShopApi from "../api/admin/shop-api";
import { useEffect, useState } from "react";
import { IAdminGetShopResponse, IAdminGetDetailShopResponse, IDetailShop } from "../interfaces/admin-interface";
import { HttpCode } from '../constants/key_local';
import * as Notify from "../shared/Notify";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../shared/Loading";
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
export function ShopManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation()
    const router = location?.pathname.split("/").splice(1)
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
    const { t } = useTranslation();
    useEffect(() => {
        getShoptList()
    }, []);
    const getShoptList = () => {
        setIsLoading(true);
        adminShopApi.getShoptList({}).then((res: any) => {
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                const data: IAdminGetShopResponse = res?.data;
                setRecord(data.payload.shops)
            } else {
                Notify.error(res?.data?.message);
            }
            setIsLoading(false)
        });
    }
    const [shopRecord, setRecord] = useState([]);
    const [shop, setShop] = useState<IDetailShop>();
    const [logoCopy, setLogoCopy] = useState("");
    const [stateModal, setModal] = useState(false)
    const [stateDeleteModal, setDeleteModal] = useState(false)
    const [curShopId, setCurShopId] = useState("");
    const getDetailShop = async (id: any) => {
        let params = {
            id: id,
        }
        setIsLoading(true);
        await adminShopApi.getDetailShop(params).then(res => {
            let data: IAdminGetDetailShopResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setShop(data?.payload);
                setLogoCopy(data?.payload.logo);
            } else {
                Notify.error(data?.message);
            }
        })
        setModal(true)
        setIsLoading(false)
    }
    const deleteConfirm = (id: string) => {
        setDeleteModal(true)
        setCurShopId(id)
    }
    const deleteShop = () => {
        setIsLoading(true);
        adminShopApi.deleteShop(curShopId).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                Notify.success(res?.data?.message)
                getShoptList()
                setDeleteModal(false)
            } else {
                Notify.error(res?.data?.message)
            }
        });
        setIsLoading(false)
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
        let param = logoCopy === shop.logo ? {
            name: shop.fullname,
            address: shop.address,

        } : {
            name: shop.fullname,
            address: shop.address,
            logo: shop.logo
        }
        setIsLoading(true)
        adminShopApi.editShop(shop.id, param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(res?.data?.message)
                getShoptList()
                setModal(false)
            } else {
                Notify.error(res?.data?.message)
            }
        })
        setIsLoading(false)
    }
    return (
        <>
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header router={router} />
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
                                                                <div className="text-secondary font-weight-bold text-xs mr-3" onClick={() => getDetailShop(item.id)}>
                                                                    Edit
                                                                </div>
                                                                <div className="text-secondary font-weight-bold text-xs mr-3" onClick={() => deleteConfirm(item.id)}>
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
                            <Modal show={stateModal} centered>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Are you sure save change</h5>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setModal(false)}> </button>
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
                                        <button type="button" className="btn btn-secondary" onClick={() => setModal(false)}>Close</button>
                                        <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                                    </div>
                                </div>
                            </Modal>
                            <Modal show={stateDeleteModal} centered>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{t('deleteShop')}?</h5>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setDeleteModal(false)}> </button>
                                    </div>
                                    <div className="modal-body">
                                        {t('wantToDeleteShop')}?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setDeleteModal(false)}>{t('cancel')}</button>
                                        <button type="button" className="btn btn-primary" onClick={deleteShop}>{t("submit")}</button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <Loading loading={isLoading} />
                    <Footer />

                </div>
            </main>

        </>
    )
}