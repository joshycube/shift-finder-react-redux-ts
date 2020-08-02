import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { shiftsRequest } from "../../services/shifts";
import * as shiftsActions from "../../store/shifts/actions";

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
        let finalError = {
          data: "",
          status: 0,
          header: "",
        };
        if (error.response) {
          finalError = {
            data: error.message,
            status: error.response.status,
            header: error.response.headers,
          };
        } else if (error.request) {
          finalError = {
            data: error.message,
            status: 0,
            header: "",
          };
        } else {
          finalError = {
            data: error.message as string,
            status: 0,
            header: "",
          };
        }
        dispatch(shiftsActions.loadShiftsAsync.failure(finalError));
      }
    };

    fetchShifts();
  }, [dispatch]);
}

export default useFetchShifts;
