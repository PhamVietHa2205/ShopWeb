import axios from 'axios';

const BASE_URL = "";
const API_TIME_OUT = 30000;
export default apiConfig = axios.create({
	baseURL: BASE_URL,
	timeout: API_TIME_OUT,
	headers: {
		'Content-Type': 'application/json',
	}
});