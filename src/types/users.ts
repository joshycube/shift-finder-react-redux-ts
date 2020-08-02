import { Locum } from "./shifts";
import { RequestError } from "./error";

export interface User extends Locum {
  staffType: string;
  staffTypeId: string;
}

export interface UserAction {
  type: any;
  payload: User;
}

export interface UserState {
  isLoadingUser: boolean;
  loadingUserError: RequestError;
  userData?: User;
}
