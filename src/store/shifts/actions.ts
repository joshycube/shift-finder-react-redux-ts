import { createAsyncAction } from "typesafe-actions";

import { RequestError } from "../../types/error";
import { Shift } from "../../types/shifts";

export const loadShiftsAsync = createAsyncAction(
  "LOAD_SHIFTS_REQUEST",
  "LOAD_SHIFTS_SUCCESS",
  "LOAD_SHIFTS_FAILURE"
)<undefined, Shift[], RequestError>();
