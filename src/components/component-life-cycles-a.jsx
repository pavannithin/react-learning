import React, {Component} from 'react';
import ComponentLifeCyclesB from "./component-life-cycles-b";

class ComponentLifeCyclesA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
        console.log("constructor A");
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps A");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount A");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate A");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate A");
        return null;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate A");

    }

    componentWillUnmount() {
        console.log("componentWillUnmount A");
    }

    handleChanges = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render() {
        console.log("render A");
        return (
            <div>
                ComponentLifeCycles rendered
                <ComponentLifeCyclesB/>
                <button onClick={this.handleChanges}>OnClick({this.state.counter})</button>
            </div>
        );
    }
}

export default ComponentLifeCyclesA;
