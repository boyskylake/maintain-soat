import { combineReducers } from "redux";

import { officerReducers } from "../Officer/redux/reducers";

export default combineReducers({ ...officerReducers });
