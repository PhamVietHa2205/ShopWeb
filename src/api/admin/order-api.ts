import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getOrdertList(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_ORDER, param);
    },
    editOrder(param: any) {
        return ClientService.put(ApiPath.API_ADMIN_EDIT_ORDER + `?id=${param.idOrder}`, param);
    },

}