import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/index';
import { useState, useEffect } from 'react';

const CartShop = () => {
    const { t } = useTranslation();
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
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
        setShippingFee(10);
    }, []);

    useEffect(() => {
        setSubTotalPrice(listInCart.map((item) => item.price * item.quantity).reduce((first, second) => first + second, 0));
    }, [listInCart]);
    

    return (
        <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table text-center mb-0 border">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th>{t('products')}</th>
                            <th>{t('price')}</th>
                            <th>{t('quantity')}</th>
                            <th>{t('total')}</th>
                            <th>{t('remove')}</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {
                            listInCart.map((item, index) => {
                                return <tr>
                                <td className="align-middle"><img src={require(`../../assets/img/${item.image}`)} alt="" style={{width: 50}}/> Colorful Stylish Shirt</td>
                                <td className="align-middle">${formatNumber(item.price, 2)}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto" style={{width: 100}}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus" >
                                            <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantity}/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">${formatNumber(item.quantity * item.price, 2)}</td>
                                <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                <form className="mb-5" action="">
                    <div className="input-group">
                        <input type="text" className="form-control p-4" placeholder="Coupon Code"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">{t('applyCoupon')}</button>
                        </div>
                    </div>
                </form>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">{t('cartSummary')}</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">{t('subTotal')}</h6>
                            <h6 className="font-weight-medium">${subTotalPrice}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">{t('shipping')}</h6>
                            <h6 className="font-weight-medium">${shippingFee}</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">{t('total')}</h5>
                            <h5 className="font-weight-bold">${subTotalPrice + shippingFee}</h5>
                        </div>
                        <button className="btn btn-block btn-primary my-3 py-3">{t('proceedToCheckout')}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CartShop