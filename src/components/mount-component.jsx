import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MountComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }


    render() {
        console.log("render");
        return (
            <div>
                Mount Component rendered
            </div>
        );
    }
}

MountComponent.propTypes = {};

export default MountComponent;
