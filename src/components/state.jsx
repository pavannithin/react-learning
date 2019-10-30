import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StateComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
        console.log("this=", this);
    };
    render() {
        return (
            <div>
                <p><b>State Feature</b></p>
                <button type={"button"} onClick={this.handleToggle}>
                    {this.state.counter > 0 ? `Clicked ${this.state.counter}` : `Click`}
                </button>
            </div>
        );
    }
}

StateComponent.propTypes = {};

export default StateComponent;
