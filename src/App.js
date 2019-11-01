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

class App extends Component {
    render() {
        return (
            <div className="App">
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

                {/*Function example - <FunctionExample/>*/}
                {/*With JSX Syntax - <WithJSX/>*/}
                {/*With OUT JSX Syntax - <WithOutJSX/>*/}
                {/*Props- <ParentComponent/>*/}
                {/*Class example - <ClassExample/>*/}
                {/*state - <StateComponent/>*/}
                {/*lists - <RenderingLists/>*/}
                 ComponentLifeCycles - <ComponentLifeCyclesA/>
                {/*Api Call - <ApiCall/>*/}

            </div>
        );
    }
}

export default App;
