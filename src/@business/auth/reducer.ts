import { LoginRequest, LoginResponse } from "@domain/models/login.model"
import { createSlice } from "@reduxjs/toolkit"
import { AuthAction, AuthState } from "./types"

const initialState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  expiresOn: null,
  error: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: AuthAction<LoginRequest>) {
      state.isAuthenticating = true
      state.error = null
    },
    loginSuccess(state, action: AuthAction<LoginResponse>) {
      state.isAuthenticating = false
      state.isAuthenticated = true
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.expiresOn = action.payload.expiresOn
    },
    loginFailure(state, action: AuthAction<string>) {
      state.isAuthenticating = false
      state.isAuthenticated = false
      state.error = action.payload
    }
  },
})

export const {login} = authSlice.actions

export default authSlice.reducer
