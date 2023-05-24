import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import * as Notify from "../../shared/Notify";
import { HttpCode } from "../../constants/key_local";
import productApi from '../../api/seller/product-api';
import { IDetailProductResponse } from '../../interfaces/product-interface'

export interface IModalEditProductProps {
    showEditProductModal: boolean,
    handleCloseEditProductModal: () => void,
    setLoading: (value: boolean) => void,
    id: string,
    images: string[],
    nameProduct: string,
    quantityProduct: number,
    priceProduct: string,
}

const ModalEditProduct = (props: IModalEditProductProps) => {
    const { showEditProductModal, handleCloseEditProductModal, setLoading, id, images, nameProduct, quantityProduct, priceProduct } = props;

    const { t } = useTranslation();
    const [name, setName] = useState(nameProduct);
    const [quantity, setQuantity] = useState(quantityProduct);
    const [price, setPrice] = useState(priceProduct);
    const [imageRemove, setImageRemove] = useState([]);
    const [imageAdd, setImageAdd] = useState([]);
    const [productImages, setProductImages] = useState(images);

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

    const removeImageProduct = (imageSelected: any) => {
        setProductImages(productImages.filter(image => image !== imageSelected))
        setImageRemove([...imageRemove, imageSelected])
    };

    const handleFileRead = async (event: any) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setProductImages([...productImages, String(base64)]);
        setImageAdd([...imageAdd, String(base64)])
    }

    const handleSubmitEditProductModal = () => {
        setLoading(true);
        let param = {
            id: id,
            name: name,
            quantity: quantity,
            imagesAdd: imageAdd,
            imagesRemove: imageRemove,
            price: price,
        }
        productApi.editProductInShop(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                Notify.success(t("success"));
            } else {
                Notify.error(res?.data?.message);
            }
            handleCloseEditProductModal();
        })
    }

    return <Modal show={showEditProductModal} onHide={handleCloseEditProductModal} centered>
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{t("editProduct")}</h5>
                <button type="button" className="close" onClick={handleCloseEditProductModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="message">{t('name')} *</label>
                    <input type="text" className="form-control" value={name} onChange={(event: any) => setName(event?.target?.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('quantity')} *</label>
                    <input type="number" className="form-control" value={quantity} onChange={(event: any) => setQuantity(event?.target?.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('price')} *</label>
                    <input type="number" className="form-control" value={price} onChange={(event: any) => setPrice(event?.target?.value)} required />
                </div>
                <div className="form-group d-flex  flex-column">
                    <label>{t('images')}</label>
                    <input type="file" className="form-control-file" onChange={e => handleFileRead(e)} />
                    <div className="d-flex mt-3">
                        {
                            productImages && productImages?.length > 0 && productImages?.map((item, index) => {
                                return <div className="me-3 border position-relative" style={{width: 100, height: 100}}>
                                    <img src={item} className="" style={{width: 100, height: 100}}></img>
                                    <i className="fa fa-trash text-sm ms-1 position-absolute text-danger top-0 " aria-hidden="true" style={{ right: '0', cursor: 'pointer' }} onClick={() => removeImageProduct(item)}></i>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseEditProductModal}>{t('cancel')}</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitEditProductModal}>{t("submit")}</button>
            </div>
        </div>
    </Modal>
}

export default ModalEditProduct;