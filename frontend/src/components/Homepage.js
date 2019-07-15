import React, { Component } from 'react';
import Header from './Header';
import '../styles/Homepage.css';

class Homepage extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }

}

export default Homepage