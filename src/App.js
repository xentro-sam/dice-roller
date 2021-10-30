import React, { Component } from 'react';
import Die from './Die';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Die face="five" />
                <Die face="six" />
                <Die face="three" />
                <Die face="two" />
            </div>
        );
    }
}

export default App;