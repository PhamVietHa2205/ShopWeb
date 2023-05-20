import { Rating } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import * as Notify from "../../shared/Notify";
import { HttpCode } from "../../constants/key_local";
import shopApi from '../../api/seller/shop-api';

export interface IModalCreateShopProps {
    showCreateShopModal: boolean,
    handleCloseCreateShopModal: () => void,
    setLoading: (value: boolean) => void,
}

const ModalCreateShop = (props: IModalCreateShopProps) => {
    const { showCreateShopModal, handleCloseCreateShopModal, setLoading } = props;
    const { t } = useTranslation();
    const [name, setName] = useState(5);
    const [address, setAddress] = useState("");
    const [logo, setLogo] = useState("");

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

    const handleSubmitCreateShopModal = () => {
        setLoading(true);
        let param = {
            name: name,
            address: address,
            logo: logo,
        }
        shopApi.createShop(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
                Notify.success(t("success"));
            } else {
                Notify.error(res?.data?.message);
            }
            handleCloseCreateShopModal();
        })
    }

    return <Modal show={showCreateShopModal} onHide={handleCloseCreateShopModal} centered>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{t("createShop")}</h5>
                    <button type="button" className="close" onClick={handleCloseCreateShopModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div className="form-group">
                        <label htmlFor="message">{t('shopName')} *</label>
                        <input type="text" className="form-control" onChange={(event: any) => setName(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('address')} *</label>
                        <input type="text" className="form-control" onChange={(event: any) => setAddress(event?.target?.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('logo')} *</label>
                        <input type="file" className="form-control" onChange={(event: any) => handleFileRead(event)} required/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseCreateShopModal}>{t('cancel')}</button>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmitCreateShopModal}>{t("submit")}</button>
                </div>
            </div>
    </Modal>
}

export default ModalCreateShop;