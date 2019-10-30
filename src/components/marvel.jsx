import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function MarvelComponent(props) {
    return (
        <div>
            <h1>{props.name} a.k.a {props.superHero}</h1>
        </div>
    );
}
