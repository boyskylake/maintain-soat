import {
    FeedConstants
} from '../constants';

const initialState = {
    fetching: false,
    fetchSuccess: false,
    fetchFailure: false,
    data: [],
};

export function feedData(state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case FeedConstants.FEED_REQUEST:
            return {
                fetching: action.fetching,
                    fetchSuccess: false,
                    fetchFailure: false,
            };
        case FeedConstants.FEED_SUCCESS:
            return {
                fetchSuccess: true,
                    fetching: false,
                    fetchFailure: false,
                    data: payload
            };
        case FeedConstants.FEED_FAILURE:
            return {
                fetching: false,
                    fetchSuccess: false,
                    fetchFailure: true,
            };
        default:
            return state
    }
}
