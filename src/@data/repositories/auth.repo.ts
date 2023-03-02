import Api from "@data/remote/client";
import { LoginRequest, LoginResponse } from "@domain/models/login.model";
import { IAuthRepository } from "@domain/repositories/auth.repo";

export default class AuthRepository implements IAuthRepository {
  async login(req: LoginRequest) {
    return Api.post<LoginResponse>('/login', req).then(res => res.data)
  };
}

export const authRepo = new AuthRepository()