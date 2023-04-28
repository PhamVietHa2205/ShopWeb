import TopBar from '../shared/TopBar'
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from "../shared/AppDrawer";
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../utils/index';
export function OrderList() {
    require('./../assets/css/style.css');
    require('./../assets/css/style.min.css');
    require('./../assets/scss/style.scss');
    require('./../assets/css/newStyle.css');
    const { t } = useTranslation();
    const orderList = [
        {
            "id": "8adf5cf9-70b9-429e-b899-df432e83ff70",
            "id_buyer": "4782e32e-fd72-4722-b855-4837f08811a8",
            "status": "cancel",
            "date": "2023-04-13T13:40:56.732Z",
            "payment": false,
            "detail": [
                {
                    "name": "Máy tính bảng iPad Pro M1",
                    "quantity": 2,
                    "price": "22990000"
                },
                {
                    "name": "iPhone 11(128G)",
                    "quantity": 2,
                    "price": "11500000"
                }
            ]
        },
        {
            "id": "7c75971e-80a4-4517-a5c8-704e75ff26a2",
            "id_buyer": "4782e32e-fd72-4722-b855-4837f08811a8",
            "status": "done",
            "date": "2023-04-13T14:11:48.093Z",
            "payment": true,
            "detail": [
                {
                    "name": "Túi xách TOMTOC Briefcase Premium for Macbook 13",
                    "quantity": 1,
                    "price": "990000"
                },
                {
                    "name": "Thẻ nhớ USB OTG SanDisk Ultra 16GB ",
                    "quantity": 2,
                    "price": "130000"
                }
            ]
        },
        {
            "id": "76ea17da-88d1-447a-aa8f-9c414cf32fc5",
            "id_buyer": "4782e32e-fd72-4722-b855-4837f08811a8",
            "status": "cancel",
            "date": "2023-04-13T13:44:21.147Z",
            "payment": false,
            "detail": [
                {
                    "name": "Điện thoại di động Vivo Y53s ",
                    "quantity": 2,
                    "price": "5590000"
                },
                {
                    "name": "đồng hồ applewatch",
                    "quantity": 2,
                    "price": "4790000"
                }
            ]
        }
    ]
    const statusOrder = ["done", "cancel"]
    return <>
        <TopBar />
        <AppDrawer />
        <div className="container-fluid py-5">
            {orderList.map((orderListItem) => {
                return <div key={orderListItem.id} className="row px-xl-5 border mb-3 mx-3 p-3">
                    <form className='col-8'>
                        {
                            orderListItem.detail.map((product) => {
                                return <div className='mb-3'>
                                    <h3 className="font-weight-semi-bold">{product?.name}</h3>
                                    <h3 className="font-weight-semi-bold ">{formatNumber(Number(product?.price), 2)} VND</h3>
                                    <p className="text-dark font-weight-medium mb-0 mr-3">{t('qualityProduct')}: {product?.quantity}</p>
                                </div>
                            })
                        }
                    </form>

                    <div className='col-4 flex-column text-right'>
                        <p className="text-dark font-weight-medium mb-4 ">Order day: {orderListItem?.date}</p>
                        <select className="align-self-center form-select mb-4">
                            {statusOrder.map((status) => {
                                return status === orderListItem.status ? <option selected value={status}>{status}</option> : <option value={status}>{status}</option>
                            })}

                        </select>
                        <button className="btn btn-primary px-3" data-bs-toggle="modal" data-bs-target="#exampleModal" > {t('save')}</button>
                    </div>
                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Are you sure save change</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    content
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
        <ButtonToTop />
    </>
}