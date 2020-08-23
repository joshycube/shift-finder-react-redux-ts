import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import * as actions from "./actions";
import { RequestError } from "../../types/error";
import { User, UserAction } from "../../types/users";

const shiftsReducer = combineReducers({
  isLoadingUser: createReducer(false as boolean)
    .handleAction([actions.loadUserAsync.request], () => true)
    .handleAction(
      [actions.loadUserAsync.success, actions.loadUserAsync.failure],
      () => false
    ),
  loadingUserError: createReducer(false as boolean | RequestError)
    .handleAction([actions.loadUserAsync.request], () => false)
    .handleAction(
      [actions.loadUserAsync.failure],
      (state: { loadingUserError: RequestError }, action: UserAction) =>
        action.payload
    ),
  userData: createReducer({} as User).handleAction(
    [actions.loadUserAsync.success],
    (state: { userData: User }, action: UserAction) => action.payload
  ),
});

export default shiftsReducer;
