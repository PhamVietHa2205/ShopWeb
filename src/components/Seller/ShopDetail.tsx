import { useTranslation } from "react-i18next";
import { colorList, defaultPairPrice, defaultSize } from "../../mock/shopFilter";
import { HttpCode, LocalStorageKey, TypeSort } from "../../constants/key_local";
import { formatNumber } from "../../utils";
import PaginationPage from "../../shared/Pagination";
import { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import productApi from '../../api/seller/product-api';
import { ICartEditRequest, ICartProduct, ISellerShopProductResponse, IShopProduct, IShopProductResponse } from "../../interfaces/product-interface";
import * as Notify from "../../shared/Notify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { RouteUrl } from "../../constants/path_local";
import { updateCart } from "../../redux/reducers/cart-reducer";
import ModalEditProduct from "./ModalEditProduct";
import ModalDeleteProduct from "./ModalDeleteProduct";
import ModalCreateProduct from "./ModalCreateProduct";


interface IShopDetailProps {
	setLoading: any,
}

const ShopDetail = (props: IShopDetailProps) => {
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	const { state } = useLocation();
	const { idShop, name, logo } = state;
	const { setLoading } = props;
	const navigate = useNavigate();
	const [fullListProduct, setFullListProduct] = useState([]);
	const [filterList, setFilterList] = useState([]);
	const [curListProduct, setCurListProduct] = useState([]);
	const [highestPrice, setHighestPrice] = useState(0);
	const [lowestPrice, setLowestPrice] = useState(0);
	const [searchByName, setSearchByName] = useState("");
	const [showCreateProductModal, setShowCreateProductModal] = useState(false);
	const [showEditProductModal, setShowEditProductModal] = useState(false);
	const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
	const [curProductId, setCurProductId] = useState("");
	const [curProductName, setCurProductName] = useState("");
	const [curProductImages, setCurProductImages] = useState([]);
	const [curQuantity, setCurQuantity] = useState(0);
	const [curPrice, setCurPrice] = useState("");

	useEffect(() => {
		getProductList();
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

	const getProductList = () => {
		setLoading(true);
		let param = {
			id: idShop,
		}
		productApi.getProductInShop(param).then((res) => {
			setLoading(false);
			if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
				let data: ISellerShopProductResponse = res?.data;
				setFullListProduct(data?.payload?.products);
				setFilterList(data?.payload?.products);
				setCurListProduct(data?.payload?.products.slice(0, 9));
			} else {
			Notify.error(res?.data?.message);
			}
		})
	}

	const handleShowCreateProductModal = () => {
		setShowCreateProductModal(true);
	}

	const handleShowEditProductModal = (id: string, name: string, images: string[], quantity: number, price: string) => {
		setCurProductId(id);
		setCurProductName(name);
		setCurProductImages(images);
		setCurQuantity(quantity);
		setCurPrice(price);
		setShowEditProductModal(true);
	}

	const handleShowDeleteProductModal = (id: string,  name: string) => {
		setCurProductId(id);
		setCurProductName(name);
		setShowDeleteProductModal(true);
	}

	const handleCloseCreateProductModal = () => {
        setShowCreateProductModal(false);
		getProductList();
    }	

	const handleCloseEditProductModal = () => {
        setShowEditProductModal(false);
		getProductList();
    }	

	const handleCloseDeleteProductModal = () => {
        setShowDeleteProductModal(false);
		getProductList();
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
					<div className="row pb-3 justify-content-between">
						<div className="pb-4 col-6 d-flex align-items-center">
							<img src={logo} alt={logo} className="rounded-circle mr-4" style={{width: 40, height: 40}}/>
							<h5 className="fw-bold">{name}</h5>
						</div>
						<div className="pb-1 col-6">
							<div className="d-flex mb-4 justify-content-end">
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
						<div className="pb-1 col-12">
							<div className="d-flex mb-4 justify-content-end">
							<button className='btn btn-primary rounded' onClick={handleShowCreateProductModal}>{t('createShop')}</button>
							</div>
						</div>
						{
							curListProduct && curListProduct.length > 0 ? curListProduct.map((item, index) => {
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
									</div>
									<div className="card-footer d-flex justify-content-between bg-light border">
										<a className="btn btn-sm text-dark p-0" onClick={() => handleShowEditProductModal(item.id, item.name, item.images, item.quantity, item.price)}><i className="fa fa-edit text-primary mr-1"></i>{t('edit')}</a>
										<a className="btn btn-sm text-dark p-0" onClick={() => handleShowDeleteProductModal(item.id, item.name)}><i className="fa fa-trash text-primary mr-1"></i>{t('delete')}</a>
									</div>

								</div>
							</div>
							}) : <div className="d-flex bg-secondary py-2 justify-content-center align-items-center mb-3" style={{height: 200}}>
									<h5 className="text-center">{t("noProduct")}</h5>
								</div>
						}
						{
							curListProduct && curListProduct.length > 0 &&
							<div className="col-12 pb-1">
								<PaginationPage totalItem={filterList.length} currentPage={currentPage} changePage={setCurrentPage}/>
							</div>
						}
					</div>
				</div>
			</div>
			
			{curProductId && <ModalEditProduct images={curProductImages} showEditProductModal={showEditProductModal} handleCloseEditProductModal={handleCloseEditProductModal} setLoading={setLoading} id={curProductId} nameProduct={curProductName} quantityProduct={curQuantity} priceProduct={curPrice}/>}
			{curProductId && <ModalDeleteProduct showDeleteProductModal={showDeleteProductModal} handleCloseDeleteProductModal={handleCloseDeleteProductModal} setLoading={setLoading} productId={curProductId} productName={curProductName}/>}
			<ModalCreateProduct showCreateProductModal={showCreateProductModal} handleCloseCreateProductModal={handleCloseCreateProductModal} setLoading={setLoading} idShop={idShop}/>
		</div>
	);
};
export default memo(ShopDetail);
