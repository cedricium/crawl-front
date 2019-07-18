import React, { Component } from 'react';
import styled from 'styled-components';
import './ServerCard.css';

var DynamicAvatar, DynamicBackground = [ null, null ];

class ServerCard extends Component {

    constructor(props) {
      super(props);
      this.state = {width: props.width,  bgimage: '#',
      avatar: '#',
      title: 'Loading..',
      subtitle: '[unused]',
      online: '0',
      total: '0'};      
    }

    componentWillMount()
    {
      // we are no longer using dangerouslySetHTML because it was affecting all components 
      // also we need to collect the viewport width for a responsive feature

      this.setState({width: window.innerWidth });

      if (this.props && this.props.avatar)
       {
          DynamicAvatar = styled.div`   
            display: inline-block;
            border-radius: 45px;
            position: relative;
            height: 100%; 
            background: #141414;
            border: 1px solid #ffffff9e;
            background-repeat: no-repeat;
            background-size: 190%;
            background-position: center;
            top: 3rem;
            left: 1.8rem;
            overflow: hidden;
            -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
            box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
            background-image: url(${this.props.avatar});` 
       }
    if (this.props && this.props.bgimage)
    {
        DynamicBackground = styled.div`
            background-position: 50% 50%;
            background-size: 120%;
            background-repeat: no-repeat;
            filter: blur(60px) brightness(0.8) opacity(0.6);
            will-change: transform;
            -webkit-backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            transform: translate3d(0, 0, 0);
            width: 100%;
            height: 150px;
            background-color: #263343;
            position:absolute;
            background-image:url(${this.props.bgimage});            
            `;  
      }
    }
    
    
    // called each time a parent renders this component to a client DOM
    render() {
        return (
        <div>
        
          <div className="user__card">
            <DynamicBackground />   
            <DynamicAvatar>
              <div className="avatar"></div>
            </DynamicAvatar>
    
            <div className="info">
              <h3>{this.props.title}</h3>
            </div>
          </div>
            <div className="main__content">
              <div className="upper__card">
                <div className="info2">
                  
                  <div className="pill">
                    <i className="fa fa-circle online" aria-hidden="true"></i>
                    {this.props.online} online
                  </div>
                  <div className="pill">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    {this.props.total} members
                  </div> 
                </div>
              </div>
            </div>
          </div>
        )
    }
}

ServerCard.defaltProps = {
    bgimage: '',
    avatar: '',
    title: 'default title',
    subtitle: 'default subtitle',
    online: '0',
    total: '0'
  };


export default ServerCard;