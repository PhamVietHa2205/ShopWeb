import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminShopApi from "../api/admin/shop-api";
import { useEffect, useState } from "react";
import { IAdminGetUserResponse, IAdminGetDetailShopResponse, IDetailShop } from "../interfaces/admin-interface";
import { HttpCode } from '../constants/key_local';
import * as Notify from "../shared/Notify";

export function CreateShopAdmin() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');

    useEffect(() => {
        adminShopApi.getUserList({}).then((res: any) => {
            const data: IAdminGetUserResponse = res?.data;
            setUserList(data.payload.users.filter(({ role }) => role === 'seller'))
        });
    }, []);
    const [shop, setShop] = useState({
        name: null,
        address: null,
        logo: null,
        idUser: null
    });

    const [user, setUserList] = useState([])
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
            name: shop.name,
            address: shop.address,
            logo: shop.logo,
            idUser: shop.idUser
        }
        adminShopApi.createShop(param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
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
                            <h6 className="card-header pb-0">Shop table</h6>
                            <div className="body">
                                <form className=' mx-auto  mb-4'>
                                    <div className="form-group">
                                        <label >Chủ sở hữu </label>
                                        {/* <input name="idUser" type="text" className="form-control" placeholder="Người sở hữu" onChange={updateData}  value={shop?.idUser} /> */}
                                        <select className="align-self-center form-select mb-4" name="idUser" onChange={updateData}>
                                            {user.map((status) => {
                                                return <option value={status.id}>{status.fullname}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label >Tên shop</label>
                                        <input name="name" type="text" className="form-control" placeholder="Tên shop" onChange={updateData} value={shop?.name} />
                                    </div>
                                    <div className="form-group">
                                        <label >Địa điểm</label>
                                        <input name="address" type="text" className="form-control" placeholder="Address" onChange={updateData} value={shop?.address} />
                                    </div>
                                    <div className="form-group d-flex  flex-column">
                                        <label>Logo</label>
                                        <input type="file" className="form-control-file" onChange={e => handleFileRead(e)} />
                                        {shop.logo && <img alt="error_image" className=" w-50 rounded-circle  align-self-center" src={shop?.logo}></img>}
                                    </div>
                                </form>
                            </div>
                            <div className="footer">
                                <button type="button" className="btn btn-secondary mr-3" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
            </main>

        </>
    )
}