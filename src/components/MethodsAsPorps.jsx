import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChildComponent from "./child";

class MethodsAsPorps extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMethodProps = this.handleMethodProps.bind(this);
    }

    handleMethodProps = () => {
        alert("Hello Parent");
    };

    render() {
        return (
            <div>
                <p><b>Methods as Props</b></p>
                <ChildComponent ParentHandler={this.handleMethodProps}/>
            </div>
        );
    }
}

MethodsAsPorps.propTypes = {};

export default MethodsAsPorps;
