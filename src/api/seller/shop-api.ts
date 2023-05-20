import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getShoptList(param: any) {
        return ClientService.get(ApiPath.API_SELLER_GET_LIST_SHOP, param);
    },
    createShop(param: any) {
        return ClientService.post(ApiPath.API_SELLER_CREATE_SHOP, param);
    },
    editShop(param: any) {
        let shopId = param.id;
        delete param.id;
        return ClientService.put(ApiPath.API_SELLER_EDIT_SHOP + `/${shopId}`, param);
    },
    deleteShop(param: any) {
        return ClientService.delete(ApiPath.API_SELLER_DELETE_SHOP + `/${param.id}`);
    },
}