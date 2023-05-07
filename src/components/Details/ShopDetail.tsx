import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from "react";
import { formatNumber } from '../../utils/index';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { useLocation } from 'react-router-dom';
import productApi from '../../api/product-api';
import { HttpCode, LocalStorageKey } from '../../constants/key_local';
import * as Notify from "../../shared/Notify";
import { ICartEditRequest, ICartProduct, ICartResponse, IComment, IDetailProduct, IDetailProductResponse, IPostCommentResponse } from '../../interfaces/product-interface';
import { colorList, defaultSize } from '../../mock/shopFilter';
import { RootState } from '../../redux';
import { updateCart } from '../../redux/reducers/cart-reducer';

interface IShopDetailProps {
    setLoading: any,
}

const ShopDetail = (props: IShopDetailProps) => {
    const { t } = useTranslation();
    const { setLoading } = props;
    const [rate, setRate] = useState(0);
    const [shortDescription, setShortDescription] = useState("");
    const [productCount, setProductCount] = useState(0);
    const [yourRate, setYourRate] = useState(0);
    const [yourComment, setYourComment] = useState("");
    const { state } = useLocation();
    const { id } = state;
    const [product, setProduct] = useState<IDetailProduct>();
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        getDetailProduct();
    }, []);

    const increaseCount = () => {
        setProductCount(productCount + 1);
    }

    const decreaseCount = () => {
        if (productCount > 0)
            setProductCount(productCount - 1);
    }

    const handleAddToCart = () => {
        setLoading(true);
        let params: ICartEditRequest;
        if (cart && cart?.some((item: ICartProduct) => item.id === id)) {
            params = {
                detail: [...cart.map((item: ICartProduct) => {
                    return { idProduct: item.id, quantity: item.id === id ? productCount : item.quantity }
                })]
            };
        } else {
            if (cart)
                params = {
                    detail: [...cart.map((item: ICartProduct) => {
                        return { idProduct: item.id, quantity: item.quantity }
                    }), { idProduct: id, quantity: productCount }]
                };
            else params = {
                detail: [{ idProduct: id, quantity: productCount }]
            }
        };

        productApi.editCart(params).then((res) => {
            setLoading(false);
            if (res?.status === HttpCode.OK) {
            } else {
                Notify.error(res?.data?.message)
            }
        })
        getCart();
    }

    const getCart = () => {
        productApi.getCart({}).then((res) => {
            if (res?.status === HttpCode.OK) {
                let data: ICartResponse = res?.data;
                dispatch(updateCart(data?.payload));
                localStorage.setItem(LocalStorageKey.CART, JSON.stringify(cart))
            } else {
                Notify.error(res?.data?.message);
            }
        })
        return () => {
            localStorage.setItem(LocalStorageKey.CART, JSON.stringify(cart))
        }
    }

    const getDetailProduct = () => {
        setLoading(true);
        let params = {
            id: id,
        }
        productApi.getDetailProduct(params).then((res) => {
            setLoading(false);
            let data: IDetailProductResponse = res?.data;
            if (res?.status === HttpCode.OK) {
                setProduct(data?.payload);
                setRate(data?.payload?.comments?.length ? (data?.payload?.comments?.reduce((sum, value: IComment) => sum + value.star, 0) / data?.payload?.comments?.length) : 0);
            } else {
                Notify.error(data?.message);
            }
        });
    }

    // const handleSubmitReview = (event: any) => {
    //     event.preventDefault();
    //     if (yourRate === 0) {
    //         Notify.error(t("plsChooseRate"));
    //         return;
    //     }
    //     if (!yourComment) {
    //         Notify.error(t("plsFillYourReview"));
    //         return;
    //     }

    //     setLoading(true);
    //     let param = {
    //         idProduct: id,
    //         content: yourComment,
    //         star: yourRate,
    //         idOrder: ,
    //     }

    //     productApi.postComment(param).then((res) => {
    //         setLoading(false);
    //         let data: IPostCommentResponse = res?.data;
    //         if (res?.status === HttpCode.OK && data?.code !== -1) {
    //             Notify.success(t("success"));
    //         } else {
    //             Notify.error(data?.message);
    //         }
    //     });
    //     getDetailProduct();
    // }

    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <div id="product-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner border">
                            {
                                product?.images && product?.images?.map((item, index) => {
                                    return <div className={`carousel-item ${index === 0 ? "active" : "0"}`} key={index}>
                                        <img className="w-100 h-100" src={product?.images[index]} alt={item} />
                                    </div>
                                })
                            }
                        </div>
                        <a className="carousel-control-prev" href="#product-carousel" data-bs-slide="prev">
                            <i className="fa fa-2x fa-angle-left text-dark"></i>
                        </a>
                        <a className="carousel-control-next" href="#product-carousel" data-bs-slide="next">
                            <i className="fa fa-2x fa-angle-right text-dark"></i>
                        </a>
                    </div>
                </div>

                <div className="col-lg-7 pb-5">
                    <h3 className="font-weight-semi-bold">{product?.nameProduct}</h3>
                    <div className="d-flex mb-3">
                        <Rating
                            className='me-3'
                            defaultValue={rate}
                            readOnly
                        />
                        <small className="pt-1">{`${product?.comments?.length} ${t('reviews')}`}</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">{formatNumber(Number(product?.price), 2)} VND</h3>
                    <p className="mb-4">{shortDescription}</p>
                    <div className="d-flex mb-3">
                        <p className="text-dark font-weight-medium mb-0 mr-3">{t('sizes')}:</p>
                        <form>
                            {
                                defaultSize.map((item, index) => {
                                    return <div className="custom-control custom-radio custom-control-inline" key={item}>
                                        <input type="radio" className="custom-control-input" id={item} name="size" />
                                        <label className="custom-control-label text-uppercase" htmlFor="size-1">{item}</label>
                                    </div>
                                })
                            }
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <p className="text-dark font-weight-medium mb-0 mr-3">{t('colors')}:</p>
                        <form>
                            {
                                colorList.map((item, index) => {
                                    return <div className="custom-control custom-radio custom-control-inline" key={item}>
                                        <input type="radio" className="custom-control-input" id="item" name="color" />
                                        <label className="custom-control-label text-capitalize" htmlFor="color-1">{item}</label>
                                    </div>
                                })
                            }
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{ width: 130 }}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus" onClick={decreaseCount}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary text-center" value={productCount} />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus" onClick={increaseCount}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3" onClick={handleAddToCart}><i className="fa fa-shopping-cart mr-1"></i> {t('addToCart')}</button>
                    </div>
                    <div className="d-flex pt-2">
                        <p className="text-dark font-weight-medium mb-0 mr-2">{t('shareOn')}:</p>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fa fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="nav nav-tabs justify-content-start border-secondary mb-4">
                        <a className="nav-item nav-link active" data-bs-toggle="tab" href="#review-tab">{t('reviews')} ({rate})</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="review-tab">
                            <div className="row">
                                <div className="col border-bottom" style={{ minHeight: 200 }}>
                                    <h4 className="mb-4">{`${rate} ${t('reviewsFor')} "${product?.nameProduct}"`}</h4>
                                    {
                                        product?.comments?.map((comment: IComment, index) => {
                                            return <div className="media mb-4" key={index}>
                                                <img src={require('../../assets/img/user.jpg')} alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                                <div className="media-body">
                                                    <h6>{comment.name}</h6>
                                                    <Rating
                                                        className='me-3'
                                                        defaultValue={comment.star}
                                                        readOnly
                                                    />
                                                    <p>{comment.content}</p>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                                {/* <div className="col-md-6">
                                    <form onSubmit={handleSubmitReview}>
                                        <h4 className="mb-4">{t('leaveAReview')}</h4>
                                        <small>{t('requiredFormWarning')} *</small>
                                        <div className="d-flex my-3">
                                            <p className="mb-0 mr-2">{t('yourRating')} * :</p>
                                            <Rating
                                                className='form-group me-3'
                                                defaultValue={yourRate}
                                                value={yourRate}
                                                onChange={(event: any, newValue: any) => setYourRate(newValue)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">{t('yourReview')} *</label>
                                            <textarea id="message" cols={30} rows={5} className="form-control" onChange={(event: any) => setYourComment(event?.target?.value)}></textarea>
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value={t('leaveYourReview')} className="btn btn-primary px-3" readOnly/>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(ShopDetail);