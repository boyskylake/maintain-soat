import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { feedData } from "./feedData.reducer";

export const officerReducers = {
    authentication,
    users,
    feedData,
};
