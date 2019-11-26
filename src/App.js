import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WithOutJSX from './components/with-out-jsx';
import WithJSX from './components/with-jsx';
import ParentComponent from "./components/parent";
import ComponentLifeCyclesA from "./components/component-life-cycles-a";
import StateComponent from "./components/state";
import ApiCall from "./components/api-call";
import RenderingLists from "./components/renderingLists";
import FunctionExample from "./components/functionExample";
import ClassExample from "./components/classExample";
import MethodsAsPorps from "./components/MethodsAsPorps";
import BasicReduxExample from "./components/redux/basic-redux-example";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider, connect} from "react-redux";
import {basicReducer} from "./components/redux/basic-redux-example";


/*function basicReducer(state = {
    counter: 0,
}, action) {
    switch (action.type) {
        case "INCREMENT":
            return Object.assign({}, state, {
                counter: state.counter + 1
            });
        case "DECREMENT":
            return Object.assign({}, state, {
                counter: state.counter - 1
            });
        default:
            return state;
    }
};*/
const store = createStore(basicReducer, applyMiddleware(thunkMiddleware));

class App extends Component {


    /*    */
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>

                {/*Class example - <ClassExample/>*/}
                {/*Function example - <FunctionExample/>*/}
                {/*With JSX Syntax - <WithJSX/>*/}
                {/*With OUT JSX Syntax - <WithOutJSX/>*/}
                {/*Props- <ParentComponent/>*/}
                {/*state - <StateComponent/>*/}
                {/*lists - <RenderingLists/>*/}

                {/* ComponentLifeCycles - <ComponentLifeCyclesA/>*/}
                {/*<MethodsAsPorps/>*/}
                {/*Api Call - <ApiCall/>*/}
                <BasicReduxExample/>
                {/*<FromRegistraion/>*/}
                </Provider>
            </div>
        );
    }
}

export default App;
