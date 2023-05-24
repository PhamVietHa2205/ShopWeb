import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import shopApi from '../../api/seller/shop-api';
import { HttpCode } from "../../constants/key_local";
import * as Notify from "../../shared/Notify";

export interface IModalDeleteShopProps {
    showDeleteShopModal: boolean,
    handleCloseDeleteShopModal: () => void,
    setLoading: (loading: boolean) => void,
    shopId: string,
    shopName: string,
}

const ModalDeleteShop = (props: IModalDeleteShopProps) => {
    const { showDeleteShopModal, handleCloseDeleteShopModal, setLoading, shopId, shopName } = props;
    const { t } = useTranslation();

    const handleSubmitDeleteShopModal = () => {
        setLoading(true);
        let param = {
            id: shopId,
        }
        shopApi.deleteShop(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(t("success"));
            } else {
                Notify.error(res?.data?.message);
            }
            handleCloseDeleteShopModal();
        })
    }

    return <Modal show={showDeleteShopModal} onHide={handleCloseDeleteShopModal} centered>
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{t('deleteShop')}?</h5>
                <button type="button" className="close" onClick={handleCloseDeleteShopModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {t('wantToDeleteShop')} {shopName}?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteShopModal}>{t('cancel')}</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmitDeleteShopModal}>{t("submit")}</button>
            </div>
        </div>
    </Modal>
}

export default ModalDeleteShop;