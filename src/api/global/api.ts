import axios, { AxiosError, AxiosResponse } from "axios";

export const AUTH_TOKEN = "youtubesharing.auth_token"
export const api = axios.create({
	baseURL: "http://192.168.0.10:9800",
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	},
});

api.interceptors.response.use(
	function (response) {
		if (response.data) {
			// return success
			if (response.status === 200 || response.status === 201) {
				return response;
			}
			return Promise.reject(response);
		}

		return Promise.reject(response);
	},
	function (error: AxiosError) {
		return Promise.reject(error);
	}
);

export const fetcher = async <Data>(url: string) => {
	const token = localStorage.getItem(AUTH_TOKEN);
	console.log(token);
	const response = await api.request<Data, AxiosResponse<Data>>({
		url,
		headers: buildHeadersWithToken()
	});

	return response.data as Data;
};


export const post = async <Data>(url: string, data: any) => {

	const response = await api.post<Data, AxiosResponse<Data>>(url, data, {
		headers: buildHeadersWithToken()
	});

	if (!response) {
		return null;
	}
	if (response != null && response.status) {
		console.log("status:", response.status);
	}
	// console.log('response:', response, url, data);
	return response.data as Data;
};
export const get = async <Data>(url: string) => {
	const token = localStorage.getItem(AUTH_TOKEN);
	const response = await api.get<Data, AxiosResponse<Data>>(url, {
		headers: buildHeadersWithToken()
	});
	return response.data as Data;
};

export interface ResponseError {
	code: number;
	error_message: string;
}

export function isResponseError(item: any): item is ResponseError {
	return 'error_message' in item;
}

const buildHeadersWithToken = () => {
	const token = localStorage.getItem(AUTH_TOKEN);
	return {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		Authorization: "Bearer " + token,
	}
}