import { combineReducers } from "redux";
// import Login from "./Login";
import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";

export default combineReducers(
    {
        authentication,
        users,
        // login: Login,
    }
);