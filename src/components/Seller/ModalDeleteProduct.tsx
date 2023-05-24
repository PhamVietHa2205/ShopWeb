import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import productApi from '../../api/seller/product-api';
import { HttpCode } from "../../constants/key_local";
import * as Notify from "../../shared/Notify";

export interface IModalDeleteProductProps {
    showDeleteProductModal: boolean,
    handleCloseDeleteProductModal: () => void,
    setLoading: (loading: boolean) => void,
    productId: string,
    productName: string,
}

const ModalDeleteProduct = (props: IModalDeleteProductProps) => {
    const { showDeleteProductModal, handleCloseDeleteProductModal, setLoading, productId, productName } = props;
    const { t } = useTranslation();

    const handleSubmitDeleteProductModal = () => {
        setLoading(true);
        let param = {
            id: productId,
        }
        productApi.deleteProductInShop(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(t("success"));
            } else {
                Notify.error(res?.data?.message);
            }
            handleCloseDeleteProductModal();
        })
    }

    return <Modal show={showDeleteProductModal} onHide={handleCloseDeleteProductModal} centered>
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{t('deleteShop')}?</h5>
                <button type="button" className="close" onClick={handleCloseDeleteProductModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {t('wantToDeleteShop')} {productName}?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteProductModal}>{t('cancel')}</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmitDeleteProductModal}>{t("submit")}</button>
            </div>
        </div>
    </Modal>
}

export default ModalDeleteProduct;