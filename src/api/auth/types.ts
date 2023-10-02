
export interface LoginRequest {
  email: string;
  password: string;
}


export interface LoginResponse {
  id: number;
  email: string;
  sessionToken: string;
  expiredAt: string;
  createdAt: string,
}



export interface LogoutResponse {
  code: number,
  success_message: string;
}
