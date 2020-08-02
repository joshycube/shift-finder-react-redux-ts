import React from "react";
import { connect } from "react-redux";

import useFetchShifts from "./useFetchShifts";
import ShiftsRender from "./render";

import { Store } from "../../types/store";
import { Shift } from "../../types/shifts";
import { shiftsAvailableSelector } from "../../selectors/shifts.selectors";
import { RequestError } from "../../types/error";
import Loader from "../loader";
import Error from "../error";

interface Props {
  shifts: Shift[];
  error: RequestError;
  isLoading: boolean;
}

function ShiftsContainer({ shifts, error, isLoading }: Props) {
  useFetchShifts();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <ShiftsRender shifts={shifts} />;
}

const mapStateToProps = (state: Store) => {
  return {
    isLoading: state.shifts.isLoadingShifts,
    error: state.shifts.loadingShiftsError,
    shifts: shiftsAvailableSelector(state),
  };
};

export default connect(mapStateToProps)(ShiftsContainer);
