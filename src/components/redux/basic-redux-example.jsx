/*
import React, {Component} from 'react';
import {connect} from "react-redux";
import ChildComponent from "./child-component";




class BasicReduxExample extends Component {

    render() {
        const {count, handleIncrement, handleDecrement} = this.props;
        console.log("count=", count);
        return (

            <p>
                ParentComponentCount: {count} times&nbsp;

                <button onClick={handleIncrement}>
                    +
                </button>
                {' '}
                <button onClick={handleDecrement}>
                    -
                </button>
                <ChildComponent count={count}/>
            </p>

        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    count: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleIncrement: () => dispatch({type: "HANDLE_INCREMENT"}),
    handleDecrement: () => dispatch({type: "HANDLE_DECREMENT"})
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicReduxExample);
// export default BasicReduxExample

*/
