export interface LoginRequest {
  email: string;
  pwd: string;
}

interface Token {
  token: string;
}
export interface LoginResponse {
  data: Token;
}
