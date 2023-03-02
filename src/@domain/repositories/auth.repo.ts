import { LoginRequest, LoginResponse } from "@domain/models/login.model";

export interface IAuthRepository {
  login: (req: LoginRequest) => Promise<LoginResponse>
}
