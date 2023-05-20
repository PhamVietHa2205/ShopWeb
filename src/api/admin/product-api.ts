import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getProductList(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_LIST_PRODUCT + `/${param.idShop}`, param);
    },
    postProduct(param: any) {
        return ClientService.post(ApiPath.API_ADMIN_CREATE_PRODUCT, param);
    },
    deleteProduct(param: any) {
        return ClientService.delete(ApiPath.API_ADMIN_DELETE_PRODUCT + `/${param.idProduct}`, param);
    },
    getDetailProduct(param: any) {
        return ClientService.get(ApiPath.API_GET_DETAIL_PRODUCT + `/${param.idProduct}`, param);
    },
    editProduct(idProduct: string, param: any) {
        return ClientService.put(ApiPath.API_ADMIN_EDIT_PRODUCT + `/${idProduct}`, param);
    },
    getHotProduct(param: any) {
        return ClientService.get(ApiPath.API_HOT_PRODUCTS, param)
    }
}