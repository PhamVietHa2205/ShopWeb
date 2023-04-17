import axios, { AxiosRequestConfig } from 'axios';
import { RouteUrl } from '../constants/path_local';
import { HttpCode, LocalStorageKey } from '../constants/key_local';

const AppConfig: AxiosRequestConfig = {
    baseURL: "https://backend-sell-final-du-an.vercel.app/",
    responseType: 'json',
    timeout: 30000,
}

const client = axios.create(AppConfig);

const ClientService = {
	get(url: string, config?: any) {
		return client.get(url, { ...this.configHeader(), ...config });
	},

	post(url: string, params: any, config?: any) {
		return client.post(url, params, { ...this.configHeader(), ...config });
	},

	put(url: string, params: any, config?: any) {
		return client.put(url, params, { ...this.configHeader(), ...config });
	},

	delete(url: string, config?: any) {
		return client.delete(url, { ...this.configHeader(), ...config });
	},

	configHeader() {
		return {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem(LocalStorageKey.TOKEN)}`
			}
		}
	}
};

client.interceptors.response.use(res => {
	return res;
}, error => {
	if (error?.response?.status === HttpCode.UNAUTHORIZED) {
		localStorage.clear();
		window.location.pathname = RouteUrl.LOG_IN;
	} else {
		throw error;
	}
})

export default ClientService;
