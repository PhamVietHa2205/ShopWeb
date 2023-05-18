import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getShoptList(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_SHOP, param);
    },
    getDetailShop(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_SHOP + `?id=${param.id}`, param);
    },
    editShop(idShop: any, param: any) {
        return ClientService.put(ApiPath.API_ADMIN_EDIT_SHOP + `/${idShop}`, param);
    },
    createShop(param: any) {
        return ClientService.post(ApiPath.API_ADMIN_CREATE_SHOP, param);
    },
    deleteShop(idShop: any) {
        return ClientService.delete(ApiPath.API_ADMIN_DELETE_SHOP + `/${idShop}`);
    },
    getUserList(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_USER, param);
    }
}