import { RequestError } from "./error";

export interface ApplicationIds {
  [k: number]: number;
}

export interface Practice {
  id: string;
  name: string;
}

export interface Locum {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Shift {
  id: string;
  status: "DRAFT" | "POSTED" | "FILLED" | "COMPLETED" | "EXPIRED";
  startDatetime: string;
  endDatetime: string;
  applicationIds?: ApplicationIds[];
  practice: Practice;
  locum: Locum;
  hourlyRate: number;
  staffType: string;
  staffTypeId: number;
}

export interface ShiftAction {
  type: any;
  payload: Shift[];
}

export interface ShiftsState {
  isLoadingShifts: boolean;
  loadingShiftsError: RequestError;
  shiftsData: [] | Shift[];
}
