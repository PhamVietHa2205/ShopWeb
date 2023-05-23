import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getProductInShop(param: any) {
        return ClientService.get(ApiPath.API_SELLER_GET_PRODUCT_IN_SHOP + `/${param.id}`, param);
    },
    deleteProductInShop(param:any){
        return ClientService.delete(ApiPath.API_SELLER_DELETE_PRODUCT + `/${param.id}`, param)
    },
    getDetailProduct(param: any){
        return ClientService.get(ApiPath.API_SELLER_GET_DETAIL_PRODUCT + `/${param.id}`, param)
    },
    editProductInShop(param: any){
        let productId = param.id;
        delete param.id;
        return ClientService.put(ApiPath.API_SELLER_EDIT_PRODUCT + `/${productId}`, param)
    }
}