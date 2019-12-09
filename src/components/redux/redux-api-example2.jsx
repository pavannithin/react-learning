import React from 'react';
import {CircularProgress,IconButton,Button} from "@material-ui/core";
import {connect} from "react-redux";
import {deleteFeed} from "./actions/index";
import DeleteIcon from '@material-ui/icons/Delete';



function ReduxAPIExample2(props) {
    const {userFeeds, isLoading} = props;
    console.log("userFeeds=", userFeeds);
    console.log("isLoading=", isLoading);
    return (
        <div>
            {isLoading ? <CircularProgress/> :
                <div>
                    {userFeeds != null && userFeeds.map((post) => <div key={post.id}>
                        <p><b>Post Id:</b> {post.id}</p>
                    <IconButton aria-label="delete" onClick={() => props.deleteFeed(post.id)}  >
                        <DeleteIcon fontSize="large"/>
                    </IconButton>
                        <p><b>Post Title:</b> {post.title}</p>
                        <p><b>Post Body:</b> {post.body}</p>
                    </div>
                )}
                </div>
            }
        </div>

    )

}

const mapStateToProps = (state, ownProps) => ({
    userFeeds: state.userFeedsReducer.userFeeds,
    isLoading: state.userFeedsReducer.isLoading
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteFeed: (id) => dispatch(deleteFeed(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReduxAPIExample2);
