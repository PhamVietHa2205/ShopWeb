export interface IProductHotResponse {
	code: number,
	message: string,
	payload: IProductHotPayLoad[],
}

export interface IProductHotPayLoad {
	name: string,
	id: string,
	price: string,
	id_shop: string,
	quantity: number,
	quantityBeSold: number,
	images: string[],
	logo: string,
	nameShop: string,
}

export interface ICartInformation {
	cartList: ICartProduct[];
}

export interface ICartResponse {
	code: number,
	message: string,
	payload: ICartProduct[],
}

export interface ICartProduct {
	name: string,
	id: string,
	price: string,
	id_product: string,
	quantity: number,
	image: string,
}

export interface ICartEditRequest {
	detail: ICartRequest[],
}

export interface ICartRequest {
	idProduct: string,
	quantity: number,
}

export interface IDetailProductResponse {
	code: number,
	message: string,
	payload: IDetailProduct,
}

export interface IDetailProduct {
	id: string,
	price: string,
	nameProduct: string,
	quantity: number,
	nameShop: string,
	address: string,
	logo: string,
	images: string[],
	comments: IComment[],
}

export interface ICommentResponse {
    code: number,
    message: string,
    payload: ICommentPayload[],
}

export interface ICommentPayload {
    totalPage: number,
    pageIndex: number,
    pageSize: number,
    comments: IComment[],
}

export interface IComment {
    id: string,
    content: string,
    star: number,
    id_order: string,
    name: string,
}

export interface IPostCommentResponse {
	code: number,
	message: string,
}

export interface IShopProductResponse {
	code: number,
	message: string,
	payload: IShopProductPayload,
}

export interface IShopProductPayload {
	shop: IShopDetail,
	products: IShopProduct[]
}

export interface IShopDetail {
	logo: string,
	name: string,
	address: string,
}

export interface IShopProduct {
	name: string,
	quantity: number,
	id: string,
	images: string[],
	price: string,
	quantityBeSold: number,
}

export interface ISellerShopProductResponse {
	code: number,
	message: string,
	payload: ISellerShopProductPayload,
}

export interface ISellerShopProductPayload {
	pageIndex: number,
	pageSize: number,
	products: ISellerShopProduct[],
}

export interface ISellerShopProduct {
	id: string,
	id_shop: string,
	image: string[],
	name: string,
	price: string,
	quantity: number,
}