import { authRepo } from "@data/repositories/auth.repo";
import { LoginRequest } from "@domain/models/login.model";
import { authSlice } from "./reducer";
import { AuthWorker } from "./types";

export const loginWorker: AuthWorker<LoginRequest> = async (action, listener) => {
  try {
    const res = await authRepo.login(action.payload)

    listener.dispatch(authSlice.actions.loginSuccess(res))
  } catch (error) {
    listener.dispatch(authSlice.actions.loginFailure('error'))
  }
}
