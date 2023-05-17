import { ICartProduct } from "./product-interface";

export interface IOrderListResponse {
	code: number,
	message: string,
	payload: IOrderListPayload,
}

export interface IOrderListPayload {
    orders: IOrder[],
}

export interface IOrder{
	id: string,
	id_buyer: string,
	status: string,
	date: string,
	payment: boolean,
	detail: IOrderProduct[],
}
export interface IOrderProduct {
	id: string,
	id_order: string,
	nameProduct: string,
	quantity: number,
	price: string,
}

export interface IOrderListInformation {
	orderList: IOrder[],
}