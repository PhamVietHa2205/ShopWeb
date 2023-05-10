import ClientService from "../config/config-json-api";
import { ApiPath } from "../constants/path_api";

export default {
	postOrder(param: any) {
        return ClientService.post(ApiPath.API_POST_ORDER, param);
    }
}