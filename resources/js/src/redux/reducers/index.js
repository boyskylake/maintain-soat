import { combineReducers } from "redux";
// import Login from "./Login";
import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { feedData } from "./feedData.reducer";

export default combineReducers({
    authentication,
    users,
    feedData
    // login: Login,
});
