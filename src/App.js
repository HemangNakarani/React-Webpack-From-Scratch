import React from 'react';
import './App.scss';

export default function App(){
    return(
        <div>
            <h1>React+Webpack App here !!</h1>
            <h2>{ new Date().toDateString() }</h2>
        </div>
    );
};