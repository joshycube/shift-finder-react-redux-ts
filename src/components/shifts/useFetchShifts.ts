import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { shiftsRequest } from "../../services/shifts";
import * as shiftsActions from "../../store/shifts/actions";
import finalError from "../../utils/finalError";

function useFetchShifts() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShifts = async () => {
      dispatch(shiftsActions.loadShiftsAsync.request());

      try {
        const shiftsResponse = await shiftsRequest();
        if (shiftsResponse.data && shiftsResponse.data.data) {
          dispatch(
            shiftsActions.loadShiftsAsync.success(shiftsResponse.data.data)
          );
        }
      } catch (error) {
        dispatch(shiftsActions.loadShiftsAsync.failure(finalError(error)));
      }
    };

    fetchShifts();
  }, [dispatch]);
}

export default useFetchShifts;
