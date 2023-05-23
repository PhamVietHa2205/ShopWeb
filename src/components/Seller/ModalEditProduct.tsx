import { Rating } from "@mui/material";
import { useEffect,useState } from "react";
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import * as Notify from "../../shared/Notify";
import { HttpCode } from "../../constants/key_local";
import productApi from '../../api/seller/product-api';
import {IDetailProductResponse} from '../../interfaces/product-interface'

export interface IModalEditProductProps {
    showEditProductModal: boolean,
    handleCloseEditProductModal: () => void,
    setLoading: (value: boolean) => void,
    id: string,
}

const ModalEditProduct = (props: IModalEditProductProps) => {
    const { showEditProductModal, handleCloseEditProductModal, setLoading, id} = props;
    
    const { t } = useTranslation();
    // const [name, setName] = useState(5);
    const [address, setAddress] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState("");
    const [logo, setLogo] = useState("");
    useEffect(() => {
        getProduct()
    }, []);
    const getProduct = () => {
        let param = {
            id: id
        }
        productApi.getDetailProduct(param).then((res: any) => {
            const data: IDetailProductResponse = res?.data
            console.log(data);
            
            setAddress(data?.payload?.address)
            setQuantity(data?.payload?.quantity)
            setPrice(data?.payload?.price)
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
        setLogo(String(base64));
    }

    const handleSubmitEditProductModal = () => {
        setLoading(true);
        let param = {
           
            address: address,
            logo: logo,
            id: id,
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
                        <label htmlFor="message">{t('address')} *</label>
                        <input type="text" className="form-control" value={address} onChange={(event: any) => setAddress(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('quantity')} *</label>
                        <input type="number" className="form-control" value={quantity} onChange={(event: any) => setQuantity(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('price')} *</label>
                        <input type="number" className="form-control" value={price} onChange={(event: any) => setPrice(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('logo')} *</label>
                        <input type="file" className="form-control" onChange={(event: any) => handleFileRead(event)} required/>
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