import { createReducer, on } from "@ngrx/store";
import { Student } from "src/app/models/student.model";
import { setAuthenticatedUser, unsetAuthenticatedUser, updateAuthenticatedUser } from "./auth.actions";

export interface AuthState {
    authenticatedUser: Student | null;
}

const initialState: AuthState = {
    authenticatedUser: null,
};

export const authReducer = createReducer(
    initialState,
    on(setAuthenticatedUser, (oldState, payload) => {
        return {
            ...oldState,
            authenticatedUser: payload.authenticatedUser
        }
    }),
    on(unsetAuthenticatedUser, (oldState) => ({ ...oldState, authenticatedUser: null })),
    on(updateAuthenticatedUser, (oldState, payload) => {
        if (!oldState.authenticatedUser) return oldState;
        return {
            ...oldState,
            authenticatedUser: new Student(
                oldState.authenticatedUser.id,
                oldState.authenticatedUser.email,
                payload.first_name || oldState.authenticatedUser.first_name,
                payload.last_name || oldState.authenticatedUser.last_name,
                oldState.authenticatedUser.avatar
            )
        }
    })
);