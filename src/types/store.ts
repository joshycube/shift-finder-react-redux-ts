import { ShiftsState } from "./shifts";
import { UserState } from "./users";

export interface Store {
  shifts: ShiftsState;
  user: UserState;
}
