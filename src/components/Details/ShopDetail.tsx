import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from "react";
import { formatNumber } from '../../utils/index';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { useLocation } from 'react-router-dom';

interface IShopDetailProps {

}

const ShopDetail = (props: IShopDetailProps) => {
    const { t } = useTranslation();
    const commonRedux = useSelector((state: any) => state.common);
    const [reviewCount, setReviewCount] = useState(0);
    const [price, setPrice] = useState(1);
    const [productName, setProductName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [productCount, setProductCount] = useState(0);
    const [fullDescription, setFullDescription] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [productRate, setProductRate] = useState(0);
    const [yourRate, setYourRate] = useState(0);
    const [yourComment, setYourComment] = useState("");
    const { state } = useLocation();
    const { id } = state;

    const listReviews = [
        {
            image: "",
            name: "John Doe",
            time: "01 Jan 2045",
            rate: 4,
            comment: "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum."
        },
        {
            image: "",
            name: "Kien oc cho",
            time: "03 Feb 2050",
            rate: 5,
            comment: "AAA kimochi yamete kudasai ikuiku",
        }
    ]
    const listSize = [
        "xs",
        "s",
        "m",
        "l",
        "xl"
    ];
    const listColor = [
        "black",
        "white",
        "red",
        "blue",
        "green"
    ]

    const listImage = [
        "product-1.jpg",
        "product-2.jpg",
        "product-3.jpg",
        "product-4.jpg"
    ];

    useEffect(() => {
        setProductName('Colorful Stylish Shirt');
        setReviewCount(50);
        setPrice(150);
        setProductRate(3);
        setShortDescription("Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.");
        setFullDescription("Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.\nDolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.");
        setAdditionalInformation("Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.");
        setProductCount(1);
    }, []);

    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <div id="product-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner border">
                            {
                                listImage ? listImage.map((item, index) => {
                                    return <div className={`carousel-item ${index === 0 ? "active" : "0"}`} key={index}>
                                        <img className="w-100 h-100" src={require(`../../assets/img/${item}`)} alt={item} />
                                    </div>
                                })
                                    : <></>
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
                    <h3 className="font-weight-semi-bold">{productName}</h3>
                    <div className="d-flex mb-3">
                        <Rating
                            className='me-3'
                            defaultValue={productRate}
                            readOnly
                        />
                        <small className="pt-1">{`${reviewCount} ${t('reviews')}`}</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">${formatNumber(price, 2)}</h3>
                    <p className="mb-4">{shortDescription}</p>
                    <div className="d-flex mb-3">
                        <p className="text-dark font-weight-medium mb-0 mr-3">{t('sizes')}:</p>
                        <form>
                            {
                                listSize.map((item, index) => {
                                    return <div className="custom-control custom-radio custom-control-inline">
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
                                listColor.map((item, index) => {
                                    return <div className="custom-control custom-radio custom-control-inline">
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
                                <button className="btn btn-primary btn-minus" >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary text-center" value={productCount} />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> {t('addToCart')}</button>
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
                    <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                        <a className="nav-item nav-link active" data-bs-toggle="tab" href="#tab-pane-1">{t('description')}</a>
                        <a className="nav-item nav-link" data-bs-toggle="tab" href="#tab-pane-2">{t('informations')}</a>
                        <a className="nav-item nav-link" data-bs-toggle="tab" href="#tab-pane-3">{t('reviews')} ({reviewCount})</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">{t('productDescription')}</h4>
                            <p style={{ whiteSpace: "pre-wrap" }}>{fullDescription}</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">{t('additionalInformation')}</h4>
                            <p>{additionalInformation}</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">{`${reviewCount} ${t('reviewsFor')} "${productName}"`}</h4>
                                    {
                                        listReviews.map((review, index) => {
                                            return <div className="media mb-4">
                                                <img src={require('../../assets/img/user.jpg')} alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                                <div className="media-body">
                                                    <h6>{review.name}<small> - <i>{review.time}</i></small></h6>
                                                    <Rating
                                                        className='me-3'
                                                        defaultValue={review.rate}
                                                        readOnly
                                                    />
                                                    <p>{review.comment}</p>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                                <div className="col-md-6">
                                    <form>
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
                                            <textarea id="message" cols={30} rows={5} className="form-control"></textarea>
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value={t('leaveYourReview')} className="btn btn-primary px-3" readOnly/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(ShopDetail);