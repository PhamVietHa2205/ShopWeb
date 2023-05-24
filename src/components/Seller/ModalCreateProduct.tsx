import { Rating } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import * as Notify from "../../shared/Notify";
import { HttpCode } from "../../constants/key_local";
import productApi from '../../api/seller/product-api';

export interface IModalCreateProductProps {
    showCreateProductModal: boolean,
    handleCloseCreateProductModal: () => void,
    setLoading: (value: boolean) => void,
    idShop: string,
}

const ModalCreateProduct = (props: IModalCreateProductProps) => {
    const { showCreateProductModal, handleCloseCreateProductModal, setLoading, idShop } = props;
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);

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
        setImages([...images, String(base64)]);
    }

    const handleSubmitCreateProductModal = () => {
        setLoading(true);
        let param = {
            name: name,
            quantity: quantity,
            price: price,
            idShop: idShop,
            images: images,
        }
        productApi.createProduct(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                Notify.success(t("success"));
            } else {
                Notify.error(res?.data?.message);
            }
            handleCloseCreateProductModal();
        })
    }

    return <Modal show={showCreateProductModal} onHide={handleCloseCreateProductModal} centered>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{t("createProduct")}</h5>
                    <button type="button" className="close" onClick={handleCloseCreateProductModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div className="form-group">
                        <label htmlFor="message">{t('name')} *</label>
                        <input type="text" className="form-control" onChange={(event: any) => setName(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('quantity')} *</label>
                        <input type="number" className="form-control" onChange={(event: any) => setQuantity(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('price')} *</label>
                        <input type="number" className="form-control" onChange={(event: any) => setPrice(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('images')} *</label>
                        <input type="file" className="form-control" onChange={(event: any) => handleFileRead(event)} required/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseCreateProductModal}>{t('cancel')}</button>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmitCreateProductModal}>{t("submit")}</button>
                </div>
            </div>
    </Modal>
}

export default ModalCreateProduct;