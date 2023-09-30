import axios, { AxiosResponse } from "axios";

export const api = axios.create({
	baseURL: "https://nt-api.fly.dev",
	// baseURL: 'http://localhost:9999',
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "https://yoububesharing.vn",
	},
});

export const fetcher = async <Data>(url: string) => {
	const token = localStorage.getItem("nil9.auth_token");
	console.log(token);
	const response = await api.request<Data, AxiosResponse<Data>>({
		url,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "http://yoububesharing:9112",
			Authorization: "Bearer " + token,
		},
	});

	return response.data as Data;
};

export const post = async <Data>(url: string, data: any) => {
	const token = localStorage.getItem("yoububesharing.auth_token");
	const response = await api.post<Data, AxiosResponse<Data>>(url, data, {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "https://yoububesharing.vn",
			Authorization: "Bearer " + token,
		},
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
	const response = await api.get<Data, AxiosResponse<Data>>(url);

	return response.data as Data;
};
