import apiConfig from "../config/api-config";
import * as ApiPath from '../constants/path_api';

export default getUserData = (param) => {
        return apiConfig.get(ApiPath.GET_USER_DATA, param);
}