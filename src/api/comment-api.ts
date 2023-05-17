import ClientService from "../config/config-json-api";
import { ApiPath } from "../constants/path_api";

export default {
    comment(param: any) {
        return ClientService.post(ApiPath.API_COMMENT, param);
    }
}