import { createSelector } from "reselect";
import isAfter from "date-fns/isAfter";

import { Store } from "../types/store";
import { userSelector } from "./users.selectors";

const shiftsData = (state: Store) =>
  state.shifts && state.shifts && state.shifts.shiftsData;

export const shiftsAvailableSelector = createSelector(
  shiftsData,
  userSelector,
  (shifts, user) =>
    shifts.filter(
      (shift) =>
        isAfter(new Date(shift.startDatetime), Date.now()) &&
        shift.status === "POSTED" &&
        shift.locum === null &&
        user &&
        user.staffType &&
        shift.staffType === user.staffType
    )
);
