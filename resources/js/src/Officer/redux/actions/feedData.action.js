import { FeedConstants } from "../constants";
import { feedDataService } from "../services";
// import { NotificationManager } from "react-notifications";

<<<<<<< HEAD:resources/js/src/Officer/redux/actions/feedData.action.js
export const feedDataAction = {
    feedDataGet,
    feedDataPost
=======
export const feedDataActions = {
    feedDataGet,
    feedDataPost,
>>>>>>> e51d39e894a38546c7c69a488567dfa1a749d57f:resources/js/src/Officer/redux/actions/saveorder.action.js
};

function feedDataGet(url) {
    return (dispatch) => {
        dispatch(fetching(true));

        feedDataService.feedDataGet(url).then(
            (data) => dispatch(fetchSuccess(data)),
            (err) => dispatch(fetchFailure())
        );
    };
}

<<<<<<< HEAD:resources/js/src/Officer/redux/actions/feedData.action.js
function feedDataPost(url,body ={}) {
    return (dispatch) => {
        dispatch(fetching(true));

        feedDataService.feedDataPost(url,body).then(
=======
function feedDataPost(url, body = {}) {
    return (dispatch) => {
        dispatch(fetching(true));

        feedDataService.feedDataPost(url, body).then(
>>>>>>> e51d39e894a38546c7c69a488567dfa1a749d57f:resources/js/src/Officer/redux/actions/saveorder.action.js
            (data) => dispatch(fetchSuccess(data)),
            (err) => dispatch(fetchFailure())
        );
    };
}

const fetching = (bool) => {
    return {
        type: FeedConstants.FEED_REQUEST,
        fetching: bool,
    };
};

const fetchSuccess = (data) => {
    return {
        type: FeedConstants.FEED_SUCCESS,
        payload: data,
    };
};

const fetchFailure = (bool) => {
    // NotificationManager.error("ไม่สามารถเชื่อมต่อได้", "Error", 5000);
    return {
        type: FeedConstants.FEED_FAILURE,
    };
};
