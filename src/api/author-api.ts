import ClientService from "../config/config-json-api";
import { ApiPath } from "../constants/path_api";

export default {
	login(param: any) {
		return ClientService.post(ApiPath.API_LOGIN, param);
	}
}