import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import * as actions from "./actions";
import { RequestError } from "../../types/error";
import { Shift, ShiftAction, ShiftsState } from "../../types/shifts";

const shiftsReducer = combineReducers({
  isLoadingShifts: createReducer(false as boolean)
    .handleAction([actions.loadShiftsAsync.request], () => true)
    .handleAction(
      [actions.loadShiftsAsync.success, actions.loadShiftsAsync.failure],
      () => false
    ),
  loadingShiftsError: createReducer(false as boolean | RequestError)
    .handleAction([actions.loadShiftsAsync.request], () => false)
    .handleAction(
      [actions.loadShiftsAsync.failure],
      (state: ShiftsState, action: ShiftAction) => action.payload
    ),
  shiftsData: createReducer([] as Shift[]).handleAction(
    [actions.loadShiftsAsync.success],
    (state: ShiftsState, action: ShiftAction) => action.payload
  ),
});

export default shiftsReducer;
