import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getCommenttList(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_COMMENT, param);
    },


}