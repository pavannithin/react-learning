export function fetchUserFeeds() {
    return async function (dispatch) {
        dispatch({
            type: "USER_FEEDS_REQUESTED",
        });
        console.log("action triggered");
        const url = "https://jsonplaceholder.typicode.com/posts";
        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                },
                'credentials': 'include',
            });
            let data = await response.json();
            console.log("data = ", data);
            dispatch({
                type: "USER_FEEDS_RECEIVED",
                data
            });
        } catch (e) {
            dispatch({
                type: "USER_FEEDS_FAILED"
            })
        }

    }
}

export function deleteFeed(id) {
    return ({
        type: "DELETE_FEED",
        id
    })
}
