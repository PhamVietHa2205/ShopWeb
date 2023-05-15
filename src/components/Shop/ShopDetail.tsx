import { useTranslation } from "react-i18next";
import { colorList, defaultPairPrice, defaultSize } from "../../mock/shopFilter";
import { HttpCode, LocalStorageKey, TypeSort } from "../../constants/key_local";
import { formatNumber } from "../../utils";
import PaginationPage from "../../shared/Pagination";
import { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productApi from '../../api/product-api';
import { ICartEditRequest, ICartProduct, IShopProduct, IShopProductResponse } from "../../interfaces/product-interface";
import * as Notify from "../../shared/Notify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { RouteUrl } from "../../constants/path_local";
import { updateCart } from "../../redux/reducers/cart-reducer";


interface IShopDetailProps {
	setLoading: any,
}

const ShopDetail = (props: IShopDetailProps) => {
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	const { state } = useLocation();
	const { idShop } = state;
	const { setLoading } = props;
	const navigate = useNavigate();
	const cart = useSelector((state: RootState) => state.cart?.cartList);
	const [fullListProduct, setFullListProduct] = useState([]);
	const [filterList, setFilterList] = useState([]);
	const [curListProduct, setCurListProduct] = useState([]);
	const [shopDetail, setShopDetail] = useState({});
	const [highestPrice, setHighestPrice] = useState(0);
	const [lowestPrice, setLowestPrice] = useState(0);
	const [searchByName, setSearchByName] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		let param = {
			idShop: idShop,
		}
		productApi.getProductInShop(param).then((res) => {
			if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
				let data: IShopProductResponse = res?.data;
				setFullListProduct(data?.payload?.products);
				setFilterList(data?.payload?.products);
				setCurListProduct(data?.payload?.products.slice(0, 9));
			    } else {
				Notify.error(res?.data?.message);
			    }
		})
	}, []);

	useEffect(() => {
		if (highestPrice === 0) 
		{
			setFilterList(fullListProduct.filter((item: IShopProduct) => (searchByName !== "" ? item.name.toLowerCase().includes(searchByName.toLowerCase()) : true)));
			setCurListProduct(fullListProduct.filter((item: IShopProduct) => (searchByName !== "" ? item.name.toLowerCase().includes(searchByName.toLowerCase()) : true)).splice(0, 9));
		} else {
			setFilterList(fullListProduct.filter((item: IShopProduct) => (Number(item.price) >= lowestPrice) && (Number(item.price) <= highestPrice) && (searchByName !== "" ? item.name.toLowerCase().includes(searchByName.toLowerCase()) : true)));
			setCurListProduct(fullListProduct.filter((item: IShopProduct) => (Number(item.price) >= lowestPrice) && (Number(item.price) <= highestPrice) && (searchByName !== "" ? item.name.toLowerCase().includes(searchByName.toLowerCase()) : true)).splice(0, 9));
		}
	}, [highestPrice, searchByName]);

	useEffect(() => {
		setCurListProduct(filterList.slice((currentPage - 1) * 9, Math.min(filterList.length, currentPage * 9)));
	}, [currentPage, totalPage]);

	const handleViewDetail = (id: string) => {
		navigate(RouteUrl.DETAIL, {state: {id: id}});
		window.scrollTo(0, 0);
	}
	
	const handleAddToCart = (id: string) => {
		setLoading(true);
		let params: ICartEditRequest;
		if (cart && cart?.some((item: ICartProduct) => item.id_product === id)) {
		    params = {
			detail: [...cart.map((item: ICartProduct) => {
			    return {idProduct: item.id_product, quantity: item.id_product === id ? (item.quantity + 1) : item.quantity}
			})]
		    };
		} else {
		    if (cart)
		    params = {
			detail: [...cart.map((item: ICartProduct) => {
			    return {idProduct: item.id_product, quantity: item.quantity}
			}), {idProduct: id, quantity: 1}]
		    };
		    else params = {
			detail: [{idProduct: id, quantity: 1}]
		    }
		};
	
		productApi.editCart(params).then((res) => {
		    setLoading(false);
		    if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
			dispatch(updateCart(res?.data?.payload));
			localStorage.setItem(LocalStorageKey.CART, JSON.stringify(res?.data?.payload));
		    } else {
			Notify.error(res?.data?.message)
		    }
		})
	    }
	

	return (
		<div className="container-fluid pt-5">
			<div className="row px-xl-5">
				<div className="col-lg-3 col-md-12">
					<div className="border-bottom mb-4 pb-4">
						<h5 className="font-weight-semi-bold mb-4">{t('filterByPrice')}</h5>
						<form>
							<div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
								<input type="radio" className="custom-control-input" name="price" defaultChecked id="price-all" onClick={() => {setHighestPrice(0); setLowestPrice(0)}}/>
								<label className="custom-control-label" htmlFor="price-all">{t('allPrice')}</label>
							</div>
							{
								defaultPairPrice.map((item: any, index: any) => {
									return <div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3" key={index}>
									<input type="radio" className="custom-control-input" id={`price-${index}`} name="price" onClick={() => {setHighestPrice(item.highest); setLowestPrice(item.lowest)}}/>
									<label className="custom-control-label" htmlFor={`price-${index}`}>
										{`$${item.lowest} - $${item.highest}`}
									</label>
								</div>
								})
							}
						</form>
					</div>
				</div>
				<div className="col-lg-9 col-md-12">
					<div className="row pb-3">
						<div className="col-12 pb-1">
							<div className="d-flex align-items-center justify-content-between mb-4">
								<form action="">
									<div className="input-group">
										<input type="text" className="form-control" placeholder={t('searchByName')} onChange={(e) => setSearchByName(e?.target?.value)}/>
										<div className="input-group-append">
											<span className="input-group-text bg-transparent text-primary">
												<i className="fa fa-search"></i>
											</span>
										</div>
									</div>
								</form>
							</div>
						</div>
						{
							curListProduct ? curListProduct.map((item, index) => {
								return <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={index}>
								<div className="card product-item border-0 mb-4">
									<div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
										<img
											className="img-fluid w-100"
											src={item.images[0]}
											alt={item.name}
										/>
									</div>
									<div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
										<h6 className="mx-2 mb-3 text-capitalize">{item.name}</h6>
										<div className="d-flex justify-content-center">
											<h6 className="fw-bold">{formatNumber(item.price, 2)} VNĐ</h6>
										</div>
										<div className="d-flex justify-content-center">
											<h6>{t("quantity")} {item.quantity ?? 0}</h6>
											<h6 className="font-italic text-lowercase ml-2">
												({item.quantityBeSold ?? 0} {t("sold")})
											</h6>
										</div>
									</div>
									<div className="card-footer d-flex justify-content-between bg-light border">
										<a className="btn btn-sm text-dark p-0" onClick={() => handleViewDetail(item.id)}><i className="fa fa-eye text-primary mr-1"></i>{t('viewDetail')}</a>
										<a className="btn btn-sm text-dark p-0" onClick={() => handleAddToCart(item.id)}><i className="fa fa-shopping-cart text-primary mr-1"></i>{t('addToCart')}</a>
									</div>
								</div>
							</div>
							}) : <h3>{t("noProduct")}</h3>
						}
						<div className="col-12 pb-1">
							<PaginationPage totalItem={filterList.length} currentPage={currentPage} changePage={setCurrentPage}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default memo(ShopDetail);
