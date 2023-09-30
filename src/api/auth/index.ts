import { fetcher, post } from "../global/api";
import { LoginResponse } from "./types";

export const login = async (data: any) => {
  // const res = await fetcher<{ data: Product[] }>('/mock/products.json');
  const res = (await post("/api/auth/login", data)) as LoginResponse;

  return res.data;
};
