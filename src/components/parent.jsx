import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Marvel from './marvel';
import ChildComponent from "./child";
import ApiCall from "./api-call";

function ParentComponent (){
        return (
            <div>

                <p><b>Props Feature</b></p>
                <Marvel name={"Robert Downey"} superHero={"Iron Man"}/>
                <Marvel name={"Chris Evans"} superHero={"Captain America"}/>
                <Marvel name={"Chris Hemsworth"} superHero={"Thor"}/>
            </div>
        );
}

export default ParentComponent;
