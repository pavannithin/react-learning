import {combineReducers} from "redux";
import * as _ from "lodash"

export function userFeedsReducer(state = {isLoading: false, userFeeds: null, error: null}, action) {
    switch (action.type) {
        case "USER_FEEDS_REQUESTED":
            console.log("USER_FEEDS_REQUESTED");
            return Object.assign({}, state, {
                isLoading: true,
            });
        case "USER_FEEDS_RECEIVED":
            console.log("USER_FEEDS_RECEIVED=", action.data);
            return Object.assign({}, state, {
                isLoading: false,
                userFeeds: action.data
            });
        case "USER_FEEDS_FAILED":
            console.log("USER_FEEDS_FAILED");
            return Object.assign({}, state, {
                isLoading: false,
                error: "Something went Wrong"
            });
        case "DELETE_FEED":
            const {id} = action;
            console.log("DELETE_FEED", id);
            console.log("DELETE_FEEDS", _.filter(state.userFeeds, (d) => d.id != id));
            const newFeeds = _.filter(state.userFeeds, (d) => d.id != id);
            return Object.assign({}, state, {
                isLoading: false,
                userFeeds:newFeeds,
            });
        default:
            return state;
    }
}

export function basicReducer(state = 0, action) {
    switch (action.type) {
        case "HANDLE_INCREMENT":
            console.log("HANDLE_INCREMENT=");
            return state + 1;
        case "HANDLE_DECREMENT":
            console.log("HANDLE_DECREMENT=");
            return state - 1;
        default:
            return state;
    }
};


export default combineReducers({
    basicReducer,
    userFeedsReducer
});
