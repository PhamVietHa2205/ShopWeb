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
	id_shop: string,
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