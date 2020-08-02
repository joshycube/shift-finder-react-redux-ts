import { createAsyncAction } from "typesafe-actions";

import { RequestError } from "../../types/error";
import { User } from "../../types/users";

export const loadUserAsync = createAsyncAction(
  "LOAD_USER_REQUEST",
  "LOAD_USER_SUCCESS",
  "LOAD_USER_FAILURE"
)<undefined, User, RequestError>();
