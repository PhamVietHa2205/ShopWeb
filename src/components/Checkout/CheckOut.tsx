import { useTranslation } from "react-i18next"
import { useState, useEffect } from 'react';

const CheckOut = () => {
    const { t } = useTranslation();
    const [listProduct, setListProduct] = useState([]);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
    const [totalProductPrice, setTotalProductPrice] = useState(0);
    const listInCart = [
        {
            image: "product-1.jpg",
            name: "Colorful Stylish Shirt",
            price: 150,
            quantity: 1,
        },
        {
            image: "product-2.jpg",
            name: "Colorful Stylish Shirt",
            price: 150,
            quantity: 1,
        },
        {
            image: "product-3.jpg",
            name: "Colorful Stylish Shirt",
            price: 150,
            quantity: 1,
        },
        {
            image: "product-4.jpg",
            name: "Colorful Stylish Shirt",
            price: 150,
            quantity: 1,
        },
        {
            image: "product-5.jpg",
            name: "Colorful Stylish Shirt",
            price: 150,
            quantity: 1,
        }
    ]

    useEffect(() => {
        setListProduct(listInCart);
        setShippingFee(10);
        setSubTotalPrice(listInCart.map((item) => item.price).reduce((first, second) => first + second, 0));
        setTotalProductPrice(listInCart.map((item) => item.price).reduce((first, second) => first + second, 10));
    }, [listInCart]);

    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <div className="mb-4">
                        <h4 className="font-weight-semi-bold mb-4">{t('billingAddress')}</h4>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>{t('firstName')}</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>{t('lastName')}</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>{t('email')}</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>{t('phoneNumber')}</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>{t('address')}</label>
                                <input className="form-control" type="text" />
                            </div>
                            <span className="col-md-6">
                                <label>{t('addCoupon')}</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-secondary mb-5">
                        <div className="card-header bg-secondary border-0">
                            <h4 className="font-weight-semi-bold m-0">{t('orderTotal')}</h4>
                        </div>
                        <div className="card-body">
                            <h5 className="font-weight-medium mb-3">{t('products')}</h5>
                            <div className="mb-2" style={{maxHeight: "200px", overflow: "auto"}}>
                            {
                                listInCart.map((item) => {
                                    return <div className="d-flex justify-content-between">
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                                })
                            }
                            </div>
                            <hr className="mt-0" />
                            <div className="d-flex justify-content-between mb-3 pt-1">
                                <h6 className="font-weight-medium">{t('subTotal')}</h6>
                                <h6 className="font-weight-medium">${subTotalPrice}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">{t('shippingFee')}</h6>
                                <h6 className="font-weight-medium">${shippingFee}</h6>
                            </div>
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <div className="d-flex justify-content-between mt-2">
                                <h5 className="font-weight-bold">{t('total')}</h5>
                                <h5 className="font-weight-bold">${subTotalPrice + shippingFee}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card border-secondary mb-5">
                        <div className="card-header bg-secondary border-0">
                            <h4 className="font-weight-semi-bold m-0">{t('payment')}</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                                    <label className="custom-control-label" htmlFor="paypal">{t('paypal')}</label>
                                </div>
                            </div>
                            <div className="">
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                                    <label className="custom-control-label" htmlFor="banktransfer">{t('bankTransfer')}</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">{t('placeOrder')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckOut;