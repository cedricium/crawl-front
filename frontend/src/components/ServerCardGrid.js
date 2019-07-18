import React, { Component } from 'react';
import styled from 'styled-components';
import ServerCard from './ServerCard';
import './ServerCardGrid.css';
 
// grid helpers in react
const GridTrigger = 499;
const Responsive  = () => { 
  if (window.innerWidth > GridTrigger) {
    return {width: window.innerWidth, viewmobile:false};
  } else {
    return {width: window.innerWidth, viewmobile:true};
  }
}

class ServerCardGrid extends Component {
    constructor(props) {
        super(props);
        this.state = Responsive(); 
    }
    
    componentDidMount() {
        this.updateWidthState(true);
      }
    
    updateWidthState(AndView) {
        const Width = Responsive(); 
        this.state.width = Width[0];
        if (AndView) this.state.viewmobile = Width[1];
    }
    
    // TODO:  Pull these Cards from Firebase (this is just mockup for now)
    render() { 
        return (
            <div>
                <div className="servergrid">
                <ul>
                    <li><ServerCard online='53' total='159' avatar='https://i0.wp.com/digiday.com/wp-content/uploads/2017/08/Reddit-Logo.jpg?w=1440' bgimage='https://i0.wp.com/digiday.com/wp-content/uploads/2017/08/Reddit-Logo.jpg?w=1440' title='Reddit: The Official Discord Server' /></li>
                    <li><ServerCard online='53' total='159' avatar='https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg?w=1000&h=563&crop=1' bgimage='https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg?w=1000&h=563&crop=1' title='Yes, Discord Has A Discord.' /></li>
                </ul>
                </div>
            </div>
        )
    }
}

export default ServerCardGrid;