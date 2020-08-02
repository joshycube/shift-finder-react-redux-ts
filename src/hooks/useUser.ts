import { useEffect } from "react";
import { useDispatch } from "react-redux";

import userRequest from "../services/user";
import * as userActions from "../store/user/actions";

function useUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(userActions.loadUserAsync.request());

      try {
        const userResponse = await userRequest();
        if (userResponse.data) {
          dispatch(userActions.loadUserAsync.success(userResponse.data));
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
        dispatch(userActions.loadUserAsync.failure(finalError));
      }
    };

    fetchUser();
  }, [dispatch]);
}

export default useUser;
