import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export interface IModalStatusProps {
    showStatusModal: boolean,
    handleCloseStatusModal: () => void,
    curStatus: string,
    handleSubmitStatusModal: () => void,
}

const ModalStatus = (props: IModalStatusProps) => {
    const { showStatusModal, handleCloseStatusModal, curStatus, handleSubmitStatusModal } = props;
    const { t } = useTranslation();

    return <Modal show={showStatusModal} onHide={handleCloseStatusModal} centered>
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{curStatus === "done" ? t("statusDoneTitle") : curStatus === "cancel" ? t("statusCancelTitle") : curStatus === "watting" ? t("statusWaitingTitle") : t("statusDeliveringTitle")}?</h5>
                <button type="button" className="close" onClick={handleCloseStatusModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {curStatus === "done" ? t("statusDoneContent") : curStatus === "cancel" ? t("statusCancelContent") : curStatus === "watting" ? t("statusWaitingContent") : t("statusDeliveringContent")}?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseStatusModal}>{t('cancel')}</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmitStatusModal}>{t("submit")}</button>
            </div>
        </div>
    </Modal>
}

export default ModalStatus;