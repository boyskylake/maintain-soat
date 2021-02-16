import { FeedConstants } from "../constants";
import { orderService } from "../services";
// import { NotificationManager } from "react-notifications";

export const orderActions = {
    feedOrderPage,
};

function feedOrderPage() {
    return (dispatch) => {
        dispatch(fetching(true));

        orderService.orderPage().then(
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
