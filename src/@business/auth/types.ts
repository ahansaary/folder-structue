import { AppDispatch, AppState } from "@business/store"
import { User } from "@domain/models/user.model"
import { ListenerEffect, PayloadAction } from "@reduxjs/toolkit"

export interface AuthState {
  isAuthenticated: boolean
  isAuthenticating: boolean
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  expiresOn: string | null
  error: string | null
}

export interface AuthAction<T = Partial<AuthState>> extends PayloadAction<T> {}

export interface AuthWorker<T = Partial<AuthState>> extends ListenerEffect<AuthAction<T>, AppState, AppDispatch> {}
