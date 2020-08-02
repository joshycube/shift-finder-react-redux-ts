import { Store } from "../types/store";

export const userSelector = (state: Store) => state.user && state.user.userData;
