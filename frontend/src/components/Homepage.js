import React, { Component } from 'react';
import Header from './Header';
import styled from 'styled-components';
import NeatCard from './NeatCard';
import '../styles/Homepage.css';

const ShiftDown = styled.div`
  margin-top: 6em;`;

class Homepage extends Component { 
    constructor() {
        super();
    }

    componentDidMount()
    {
      //const h = document.getElementsByClassName('header').style.height;
    }

    render() {
        return (
          <div>
            <Header />
            <ShiftDown>
              <div className="container-fluid py-4 p-t-xl">
                <div className="row mx-n2">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3">
                    Test Data!!! Test Data!!! Test Data!!! Test Data!!! Test Data!!! Test Data!!!
                  </div>
                </div>
              </div>
            </ShiftDown>
          </div>           
        )
    }
}

export default Homepage