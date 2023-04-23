import ClientService from "../config/config-json-api";
import { ApiPath } from "../constants/path_api";

export default {
	getHotProductList(param: any) {
		return ClientService.get(ApiPath.API__HOT_PRODUCTS, param);
	}
}