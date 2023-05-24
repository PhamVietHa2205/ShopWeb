import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getListOrder(param: any) {
        return ClientService.get(ApiPath.API_SELLER_GET_LIST_ORDER + `/${param.idShop}`, param);
    },
    editOrder(param: any) {
        let idOrder = param.idOrder;
        delete param.idOrder;
        return ClientService.put(ApiPath.API_SELLER_EDIT_ORDER + `/${idOrder}`, param);
    },
}