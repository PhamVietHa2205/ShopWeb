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