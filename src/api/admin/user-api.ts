import ClientService from "../../config/config-json-api";
import { ApiPath } from "../../constants/path_api";

export default {
    getUsertList(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_USER, param);
    },
    editUser(idUser: string, param: any) {
        return ClientService.put(ApiPath.API_ADMIN_EDIT_USER + `/${idUser}`, param);
    },
    getDetailUser(param: any) {
        return ClientService.get(ApiPath.API_ADMIN_GET_USER + `?id=${param.id}`, param);
    },
    changeProfile(param :any){
        return ClientService.post(ApiPath.API_ADMIN_CHANGE_PROFILE, param);
    }
}