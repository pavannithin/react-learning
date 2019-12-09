import React, {Component} from 'react';
import ReduxAPIExample2 from "./redux-api-example2";
import {connect} from "react-redux";
import {fetchUserFeeds} from "./actions/index"


class ReduxAPIExample extends Component {

    async componentDidMount() {
        await this.props.fetchFeeds();
    }


    render() {
        return (
            <div>
                <h1>User Feeds</h1>
                <ReduxAPIExample2/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchFeeds: () => dispatch(fetchUserFeeds()),
});

export default connect(null, mapDispatchToProps)(ReduxAPIExample);
