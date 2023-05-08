import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import adminProductApi from "../api/admin/product-api";
import { IAdminGetProductResponse, IDetailProduct, IDetailProductShop, IAdminDetailProductResponse } from "../interfaces/admin-interface";
import * as Notify from "../shared/Notify";
import { HttpCode } from '../constants/key_local';
export function ProductManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    // const { state } = useLocation();
    // const { id } = state;
    const { id } = useParams();
    const [productRecord, setProduct] = useState([]);
    const [shopRecord, setShop] = useState<IDetailProductShop>();
    useEffect(() => {
        getProductList();
    }, [id]);
    const getProductList = () => {
        let params = {
            idShop: id,
        }
        adminProductApi.getProductList(params).then(res => {
            let data: IAdminGetProductResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setProduct(data?.payload.products);
                setShop(data?.payload.shop)
            } else {
                Notify.error(data?.message);
            }
        })
    }
    const [product, setProductShop] = useState<IDetailProduct>();
    const getDetailShop = (id: any) => {
        let params = {
            idProduct: id,
        }
        adminProductApi.getDetailProduct(params).then(res => {
            let data: IAdminDetailProductResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setProductShop(data?.payload);
            } else {
                Notify.error(data?.message);
            }
        })
    }
    const updateData = (e: any) => {
        setProductShop({
            ...product,
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
        setProductShop({
            ...product,
        })
    }
    const submit = (e: any) => {
        e.preventDefault()
        let param = {
            name: product.nameProduct,
            quantity: product.quantity,
            price: product.price,

        }
        adminProductApi.editProduct(product.id, param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
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
                            <h6>Product</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên Shop</th>
                                            <th className="text-center text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7 ">Tên sản phẩm</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Số lượng còn lại</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productRecord?.map((item, index) => {
                                                return <tr key={item.id}>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={shopRecord?.logo} className="avatar avatar-sm me-3" alt="user" />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">{shopRecord?.name}</h6>
                                                                <p className="text-xs text-secondary mb-0">{shopRecord?.address}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-center ">
                                                        <span className="text-secondary text-xs font-weight-bold">{item.name}</span>
                                                    </td>

                                                    <td className="align-middle text-center">
                                                        <p className="text-xs font-weight-bold mb-0">{item.quantity}</p>
                                                    </td>
                                                    <td className="align-middle  text-center">
                                                        <a href="#" className="text-secondary font-weight-bold text-xs" data-bs-toggle="modal" data-bs-target="#editProduct" onClick={() => getDetailShop(item.id)} >
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal fade" id="editProduct" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Are you sure save change</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className=' mx-auto  mb-4' onSubmit={submit}>

                                                <div className="form-group">
                                                    <label >Tên sản phẩm</label>
                                                    <input name="nameProduct" type="text" className="form-control" onChange={updateData} placeholder="Enter name user" value={product?.nameProduct} />
                                                </div>
                                                <div className="form-group">
                                                    <label >Giá</label>
                                                    <input name="price" type="number" className="form-control" onChange={updateData} placeholder="Phone Number" value={product?.price} />
                                                </div>
                                                <div className="form-group">
                                                    <label >Số lượng</label>
                                                    <input name="quantity" type="number" className="form-control" onChange={updateData} placeholder="Phone Number" value={product?.quantity} />
                                                </div>
                                                <div className="form-group d-flex  flex-column">
                                                    <label>Hình ảnh liên quan</label>
                                                    <div id="product-carousel" className="carousel slide" data-bs-ride="carousel">
                                                        <div className="carousel-inner ">
                                                            {
                                                                product?.images && product?.images?.map((item, index) => {
                                                                    return <div className={`carousel-item ${index === 0 ? "active" : "0"}`} key={index}>
                                                                        <img className="w-100 h-100" src={product?.images[index]} alt={item} />
                                                                    </div>
                                                                })
                                                            }
                                                        </div>
                                                        <a className="carousel-control-prev" href="#product-carousel" data-bs-slide="prev">
                                                            <i className="fa fa-2x fa-angle-left text-dark"></i>
                                                        </a>
                                                        <a className="carousel-control-next" href="#product-carousel" data-bs-slide="next">
                                                            <i className="fa fa-2x fa-angle-right text-dark"></i>
                                                        </a>
                                                    </div>
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