
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
  error_message: string;
}


export interface RegisterRequest {
  name?: string;
  email: string;
  password: string;
}
export interface RegisterResponse {
  code: number,
  error_message: string;
}
