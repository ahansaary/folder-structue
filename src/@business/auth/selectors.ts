import { useAppSelector } from "@business/hooks";
import { AuthState } from "./types";

export const useAuthState = () => useAppSelector<AuthState>(state => state.auth)

export const useIsLoggedIn = () => useAuthState().isAuthenticated

export const useIsAuthenticating = () => useAuthState().isAuthenticating

export const useLoggedInUser = () => useAuthState().user
