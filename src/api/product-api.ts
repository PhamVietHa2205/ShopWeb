import ClientService from "../config/config-json-api";
import { ApiPath } from "../constants/path_api";

export default {
	getHotProductList(param: any) {
		return ClientService.get(ApiPath.API_HOT_PRODUCTS, param);
	},
	getCart(param: any) {
		return ClientService.get(ApiPath.API_GET_CART, param);
	},
	editCart(param: any) {
		return ClientService.put(ApiPath.API_EDIT_CART, param);
	}
}