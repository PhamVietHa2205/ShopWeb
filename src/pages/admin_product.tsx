import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import adminProductApi from "../api/admin/product-api";
import { IAdminGetProductResponse, IDetailProduct, IDetailProductShop, IAdminDetailProductResponse } from "../interfaces/admin-interface";
import * as Notify from "../shared/Notify";
import { HttpCode } from '../constants/key_local';
import Loading from "../shared/Loading";
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
export function ProductManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation()
    const router = location?.pathname.split("/").splice(1)
    const { id } = useParams();
    const [productRecord, setProduct] = useState([]);
    const [imageRemove, setImageRemove] = useState([]);
    const [imageAdd, setImageAdd] = useState([]);
    const [shopRecord, setShop] = useState<IDetailProductShop>();
    useEffect(() => {
        getProductList();
    }, [id]);
    const getProductList = async () => {
        let params = {
            idShop: id,
        }
        setIsLoading(true);
        await adminProductApi.getProductList(params).then(res => {
            let data: IAdminGetProductResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setProduct(data?.payload.products);
                setShop(data?.payload.shop)
            } else {
                Notify.error(data?.message);
            }
        })
        setIsLoading(false)
    }
    const [product, setProductShop] = useState<IDetailProduct>();
    const [stateModal, setModal] = useState(false)
    const [stateDeleteModal, setDeleteModal] = useState(false)
    const [curShopId, setCurShopId] = useState("");
    const getProduct = async (id: any) => {
        let params = {
            idProduct: id,
        }
        setIsLoading(true);
        await adminProductApi.getDetailProduct(params).then(res => {
            let data: IAdminDetailProductResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setProductShop(data?.payload);
            } else {
                Notify.error(data?.message);
            }
        })
        setModal(true)
        setIsLoading(false)
    }
    const updateData = (e: any) => {
        setProductShop({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const removeImageProduct = (imageSelected: any) => {
        setProductShop({
            ...product,
            images: product?.images.filter(image => image !== imageSelected)
        })
        setImageRemove([...imageRemove, imageSelected])
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
        setProductShop({
            ...product,
            images: [...product?.images, String(base64)]
        })
        setImageAdd([...imageAdd, String(base64)])
    }
    const submit = (e: any) => {
        e.preventDefault()
        let param = {
            name: product.nameProduct,
            quantity: product.quantity,
            price: product.price,
        }
        if (imageRemove.length > 0) Object.assign(param, { imagesRemove: imageRemove })
        if (imageAdd.length > 0) Object.assign(param, { imagesAdd: imageAdd.filter(i => !imageRemove.includes(i)) })
        setIsLoading(true)
        adminProductApi.editProduct(product.id, param).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(res?.data?.message)
                getProductList();
                setModal(false)
            } else {
                Notify.error(res?.data?.message)
            }
        })
        setIsLoading(false)
    }
    const deleteConfirm = (id: string) => {
        setDeleteModal(true)
        setCurShopId(id)
    }
    const deleteProduct = () => {
        setIsLoading(true);
        adminProductApi.deleteProduct({ idProduct: curShopId }).then((res) => {
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                Notify.success(res?.data?.message)
                getProductList();
                setDeleteModal(false)
            } else {
                Notify.error(res?.data?.message)
            }
        });
        setIsLoading(false)
    }
    return (
        <>
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header router={router} />
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
                                                        <div className="d-flex justify-content-center align-items-center  mx-auto">
                                                            <div className="text-secondary font-weight-bold text-xs mr-3" onClick={() => getProduct(item.id)} >
                                                                Edit
                                                            </div>
                                                            <div className="text-secondary font-weight-bold text-xs " onClick={() => deleteConfirm(item.id)}>
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
                            <Modal show={stateModal} centered>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Are you sure save change</h5>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setModal(false)}> </button>
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
                                                <input type="file" className="form-control-file" onChange={e => handleFileRead(e)} />
                                                <div className="carousel-inner flex mt-3">
                                                    {
                                                        product?.images && product?.images?.map((item, index) => {
                                                            return <div className="avatar avatar-lg  me-3 border position-relative">
                                                                <img src={item} className=""></img>
                                                                <i className="fa fa-trash text-sm ms-1 position-absolute text-danger top-0 " aria-hidden="true" style={{ right: '0', cursor: 'pointer' }} onClick={() => removeImageProduct(item)}></i>
                                                            </div>
                                                        })
                                                    }
                                                </div>
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
                                        <h5 className="modal-title">{t('deleteProduct')}?</h5>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setDeleteModal(false)}> </button>
                                    </div>
                                    <div className="modal-body">
                                        {t('wantToDeleteProduct')}?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setDeleteModal(false)}>{t('cancel')}</button>
                                        <button type="button" className="btn btn-primary" onClick={deleteProduct}>{t("submit")}</button>
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