import { combineReducers } from "redux";

import shifts from "./shifts/reducer";
import user from "./user/reducer";

const rootReducer = () =>
  combineReducers({
    shifts,
    user,
  });

export default rootReducer;
