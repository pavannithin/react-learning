import React, {Component} from 'react';
import {connect} from "react-redux";
import ChildComponent from "./child-component";


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

