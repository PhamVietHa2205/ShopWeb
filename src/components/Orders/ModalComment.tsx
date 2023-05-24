import { Rating } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import * as Notify from "../../shared/Notify";
import commentApi from '../../api/comment-api';
import { HttpCode } from "../../constants/key_local";

export interface IModalCommentProps {
    showCommentModal: boolean,
    handleCloseCommentModal: () => void,
    idOrder: string,
    idProduct: string,
    nameProduct: string,
    setLoading: (value: boolean) => void,
}

const ModalComment = (props: IModalCommentProps) => {
    const { showCommentModal, handleCloseCommentModal, idOrder, idProduct, nameProduct, setLoading } = props;
    const { t } = useTranslation();
    const [rate, setRate] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmitCommentModal = () => {
        setLoading(true);
        let param = {
            idProduct: idProduct,
            idOrder: idOrder,
            content: comment,
            star: rate,
        }
        commentApi.comment(param).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK && res?.data?.code === 0) {
                Notify.success(t("success"));
            } else {
                Notify.error(res?.data?.message);
            }
            handleCloseCommentModal();
        })
    }

    return <Modal show={showCommentModal} onHide={handleCloseCommentModal} centered>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{t("leaveAReview")}</h5>
                    <button type="button" className="close" onClick={handleCloseCommentModal} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <h4 className="text-capitalize">{nameProduct}</h4>
                    <div className="d-flex my-3">
                        <p className="mb-0 mr-2">{t('yourRating')} * :</p>
                        <Rating
                            className='form-group me-3'
                            defaultValue={5}
                            value={rate}
                            onChange={(event: any, newValue: any) => setRate(newValue)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('yourReview')} *</label>
                        <textarea id="message" cols={30} rows={5} className="form-control" onChange={(event: any) => setComment(event?.target?.value)} required></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseCommentModal}>{t('cancel')}</button>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmitCommentModal}>{t("submit")}</button>
                </div>
            </div>
    </Modal>
}

export default ModalComment;