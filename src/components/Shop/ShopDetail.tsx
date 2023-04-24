import { useTranslation } from "react-i18next";
import { colorList, defaultPairPrice, defaultSize } from "../../mock/shopFilter";
import { TypeSort } from "../../constants/key_local";
import { formatNumber } from "../../utils";
import PaginationPage from "../../shared/Pagination";
import { memo, useState } from "react";

interface IShopDetailProps {

}

const ShopDetail = () => {
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);

	const listProduct = [
		{
			name: "Colorful Stylish Shirt",
			image: "product-1.jpg",
			price: 123,
			deletedPrice: 123,
		},
		{
			name: "Colorful Stylish Shirt",
			image: "product-2.jpg",
			price: 122,
			deletedPrice: 125,
		},
		{
			name: "Colorful Stylish Shirt",
			image: "product-3.jpg",
			price: 123,
			deletedPrice: 123,
		},
		{
			name: "Colorful Stylish Shirt",
			image: "product-4.jpg",
			price: 123,
			deletedPrice: 123,
		},
		{
			name: "Colorful Stylish Shirt",
			image: "product-5.jpg",
			price: 123,
			deletedPrice: 123,
		},
		{
			name: "Colorful Stylish Shirt",
			image: "product-6.jpg",
			price: 123,
			deletedPrice: 123,
		},
		{
			name: "Colorful Stylish Shirt",
			image: "product-7.jpg",
			price: 123,
			deletedPrice: 123,
		},
		{
			name: "Colorful Stylish Shirt",
			image: "product-8.jpg",
			price: 123,
			deletedPrice: 123,
		},
	]

	return (
		<div className="container-fluid pt-5">
			<div className="row px-xl-5">
				<div className="col-lg-3 col-md-12">
					<div className="border-bottom mb-4 pb-4">
						<h5 className="font-weight-semi-bold mb-4">{t('filterByPrice')}</h5>
						<form>
							<div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
								<input type="checkbox" className="custom-control-input" defaultChecked id="price-all"/>
								<label className="custom-control-label" htmlFor="price-all">{t('allPrice')}</label>
								{/* <span className="badge border font-weight-normal text-muted">1000</span> */}
							</div>
							{
								defaultPairPrice.map((item: any, index: any) => {
									return <div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3" key={index}>
									<input type="radio" className="custom-control-input" id={`price-${index}`} name="price"/>
									<label className="custom-control-label" htmlFor={`price-${index}`}>
										{`$${item.lowest} - $${item.highest}`}
									</label>
									{/* <span className="badge border font-weight-normal text-muted">150</span> */}
								</div>
								})
							}
						</form>
					</div>
					<div className="border-bottom mb-4 pb-4">
						<h5 className="font-weight-semi-bold mb-4">{t('filterByColor')}</h5>
						<form>
							<div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
								<input type="checkbox" className="custom-control-input" defaultChecked id="color-all"/>
								<label className="custom-control-label" htmlFor="price-all">{t('allColor')}</label>
								{/* <span className="badge border font-weight-normal text-muted">1000</span> */}
							</div>
							{
								colorList.map((item: any, index: any) => {
									return <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={index}>
									<input type="checkbox" className="custom-control-input" id={`color-${index}`}/>
									<label className="custom-control-label text-capitalize" htmlFor={`color-${index}`}>{t(item)}</label>
									{/* <span className="badge border font-weight-normal text-muted">150</span> */}
								</div>
								})
							}
						</form>
					</div>
					<div className="mb-5">
						<h5 className="font-weight-semi-bold mb-4">{t('filterBySize')}</h5>
						<form>
							<div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
								<input type="checkbox" className="custom-control-input" defaultChecked id="size-all"/>
								<label className="custom-control-label" htmlFor="size-all">{t('allSize')}</label>
								{/* <span className="badge border font-weight-normal text-muted">1000</span> */}
							</div>
							{
								defaultSize.map((item: any, index: any) => {
									return <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={index}>
									<input type="checkbox" className="custom-control-input" id={`size-${index}`}/>
									<label className="custom-control-label text-uppercase" htmlFor={`size-${index}`}>{item}</label>
									{/* <span className="badge border font-weight-normal text-muted">150</span> */}
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
										<input type="text" className="form-control" placeholder={t('searchByName')}/>
										<div className="input-group-append">
											<span className="input-group-text bg-transparent text-primary">
												<i className="fa fa-search"></i>
											</span>
										</div>
									</div>
								</form>
								<div className="ml-4">
									<select className="form-select btn border">
										{
											Object.entries(TypeSort).map((item, index) => {
												return <option className="text-start" value={item} key={index}>
													{t(item)}
												</option>
											})
										}
									</select>
								</div>
							</div>
						</div>
						{
							listProduct.map((item, index) => {
								return <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={index}>
								<div className="card product-item border-0 mb-4">
									<div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
										<img
											className="img-fluid w-100"
											src={require(`../../assets/img/${item.image}`)}
											alt={`product-${index}`}
										/>
									</div>
									<div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
										<h6 className="text-truncate mb-3">{item.name}</h6>
										<div className="d-flex justify-content-center">
											<h6>${formatNumber(item.price, 2)}</h6>
											<h6 className="text-muted ml-2">
												<del>${formatNumber(item.deletedPrice, 2)}</del>
											</h6>
										</div>
									</div>
									<div className="card-footer d-flex justify-content-between bg-light border">
										<a href="" className="btn btn-sm text-dark p-0"><i className="fa fa-eye text-primary mr-1"></i>{t('viewDetail')}</a>
										<a href="" className="btn btn-sm text-dark p-0"><i className="fa fa-shopping-cart text-primary mr-1"></i>{t('addToCart')}</a>
									</div>
								</div>
							</div>
							})
						}
						<div className="col-12 pb-1">
							<PaginationPage totalItem={listProduct.length} currentPage={currentPage} changePage={setCurrentPage}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default memo(ShopDetail);
