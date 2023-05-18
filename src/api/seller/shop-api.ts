import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getShoptList(param: any) {
        return ClientService.get(ApiPath.API_SELLER_GET_LIST_SHOP, param);
    },
}