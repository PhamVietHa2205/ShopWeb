import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils/index';
import { useState, useEffect, memo } from 'react';

interface ICartShopProps {

}

const ProductList = () => {
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
                <div className=" table-responsive mb-5">
                    <table className="table text-center mb-0 border">
                        <thead className="bg-secondary text-dark">
                            <tr>
                                <th>{t('products')}</th>
                                <th>{t('price')}</th>
                                <th>{t('quantity')}</th>
                                <th>{t('total')}</th>
                                <th>{t('action')}</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {
                                listInCart.map((item, index) => {
                                    return <tr>
                                        <td className="align-middle"><img src={require(`../../assets/img/${item.image}`)} alt="" style={{ width: 50 }} /> Colorful Stylish Shirt</td>
                                        <td className="align-middle">${formatNumber(item.price, 2)}</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantity} />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">${formatNumber(item.quantity * item.price, 2)}</td>
                                        <td className="align-middle">
                                            <button type="button" className="btn btn-primary mr-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Chi tiết
                                            </button>
                                            <button className="btn  btn-primary "><i className="fa fa-times"></i>
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>


            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className=' mx-auto  mb-4'>
                                <div className="form-group">
                                    <label >Tên sản phẩm</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name product" />
                                </div>
                                <div className="form-group">
                                    <label >Giá tiền</label>
                                    <input type="number" className="form-control" placeholder="Price" />
                                </div>
                                <div className="form-group">
                                    <label >Số lượng hàng</label>
                                    <input type="number" className="form-control" placeholder="Quantity" />
                                </div>
                                <div className="form-group">
                                    <label>Ảnh sản phẩm</label>
                                    <input type="file" className="form-control-file" />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(ProductList)