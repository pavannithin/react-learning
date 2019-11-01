import React, {Component} from 'react';

class ComponentLifeCyclesB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("constructor B");
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps B");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount B");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate B");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate B");
        return null;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate B");

    }

    componentWillUnmount() {
        console.log("componentWillUnmount B");
    }


    render() {
        console.log("render B");
        return (
            <div>
                ComponentLifeCycles B rendered
            </div>
        );
    }
}

export default ComponentLifeCyclesB;
