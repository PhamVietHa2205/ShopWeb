import ClientService from "../config/config-json-api";
import { ApiPath } from "../constants/path_api";

export default {
    getListOrder(param: any) {
        return ClientService.get(ApiPath.API_GET_LIST_ORDER, param);
    },
	postOrder(param: any) {
        return ClientService.post(ApiPath.API_POST_ORDER, param);
    },
    editOrder(param: any) {
        return ClientService.put(ApiPath.API_EDIT_ORDER, param);
    },
}