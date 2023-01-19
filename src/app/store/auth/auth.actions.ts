import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/models/student.model";

export const setAuthenticatedUser = createAction(
    '[AUTH] SET USER',
    props<{ authenticatedUser: Student }>()
);

export const unsetAuthenticatedUser = createAction('[AUTH] UNSET USER');
export const updateAuthenticatedUser = createAction(
    '[AUTH] UPDATE USER',
    props<{ first_name: string; last_name: string }>()
)