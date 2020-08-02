import * as shiftsActions from "./shifts/actions";
import * as userActions from "./user/actions";

const rootActions = {
  shifts: shiftsActions,
  user: userActions,
};

export default rootActions;
