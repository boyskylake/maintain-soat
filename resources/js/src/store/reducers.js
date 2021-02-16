import { combineReducers } from "redux";

import { officerReducers } from "../Officer/redux/reducers";
import { linebotReducers } from "../Linebot/redux/reducers";

export default combineReducers({ ...officerReducers, ...linebotReducers });
