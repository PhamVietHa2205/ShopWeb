import { ICartProduct } from "./product-interface";

export interface IOrderResponse {
	code: number,
	message: string,
	payload: IOrderPayload,
}

export interface IOrderPayload {
    id: string,
    detail: IOrderProduct[],
}

export interface IOrderProduct {
	name: string,
	id: string,
	price: string,
	id_product: string,
	quantity: number,
	image: string,
}

export interface IOrderListInformation {
	orderList: IOrderProduct[],
}