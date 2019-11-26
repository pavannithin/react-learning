import React from 'react';
import {connect} from "react-redux";

function modifyCount(state, ownprops) {
    return state + ownprops.count;
}

function ChildComponent(props) {
    const {count} = props;
    return (
        <div>
            ChildComponentCount: {count}
        </div>
    )

}

/*const mapStateToProps = (state, ownProps) => ({
    count: state + ownProps.count,
});*/
const mapStateToProps = (state, ownProps) => ({
    count: modifyCount(state, ownProps),
});

export default connect(mapStateToProps, null)(ChildComponent);

