import { useEffect } from "react";
import { useDispatch } from "react-redux";

import userRequest from "../services/user";
import * as userActions from "../store/user/actions";
import finalError from "../utils/finalError";

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
        dispatch(userActions.loadUserAsync.failure(finalError(error)));
      }
    };

    fetchUser();
  }, [dispatch]);
}

export default useUser;
