import { post } from "../global/api";
import { LoginRequest, LoginResponse, LogoutResponse } from "./types";
import { ResponseError } from "../global/api";

export const login = async (data: LoginRequest) => {
  try {
    const res = (await post("/api/login", data)) as LoginResponse;
    return res;
  } catch (error: any) {
    console.log('error', error.response.data);
    return error.response.data as ResponseError
  }
};

export const logout = async () => {
  try {
    const res = (await post("/api/logout", {})) as LogoutResponse;
    return res;
  } catch (error: any) {
    console.log('error', error.response.data);
    return error.response.data as ResponseError
  }
};


