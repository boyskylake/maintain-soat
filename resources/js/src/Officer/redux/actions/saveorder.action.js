import { FeedConstants } from "../constants";
import { feedDataService } from "../services";
import toastr from "toastr";

export const saveOrderActions = {
    feedOrderPage,
    feedDataPost
};

function feedOrderPage() {
    return (dispatch) => {
        dispatch(fetching(true));

        feedDataService.feedDataGet().then(
            (data) => dispatch(fetchSuccess(data)),
            (err) => dispatch(fetchFailure())
        );
    };
}

function feedDataPost(url, body = {}) {
    return (dispatch) => {
        dispatch(fetching(true));

        feedDataService.feedDataPost(url, body).then(
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
    toastr.error("ไม่สามารถเชื่อมต่อได้", "Error");
    return {
        type: FeedConstants.FEED_FAILURE,
    };
};
