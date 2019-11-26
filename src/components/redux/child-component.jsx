import React from 'react';
import {connect} from "react-redux";

function ChildComponent(props) {
    const {count} = props;
    return (
        <div>
            ChildComponentCount: {count}
        </div>
    )

}

const mapStateToProps = (state, ownProps) => ({
    count: state + ownProps.count,
});

export default connect(mapStateToProps, null)(ChildComponent);

