/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/ServerCard.css';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Animation = styled.div.attrs(props => ({
  style: { animationDelay: `${props.delay}s` } }))`
  opacity: 0;animation:fadeIn ease-in 1 forwards;animation-fill-mode:
  forwards;animation-duration:1s;`;

const CardBackground = styled.div.attrs(props => ({
  style: { background: 'url(' + `${props.bgImage}%` + ')' }
}))``;

const CardAvatar = styled.div.attrs(props => ({
  style: { background: 'url(' + `${props.avatar}%` + ')' }
}))``;

const CardJoin = styled.div`    float: right;
margin-top: 4em;
margin-right: 1em;
position: relative;`;


function ServerCard (props) {
  const [cardData, setCardData] = useState(props.data);
  const [cardNumber, setCardNumber] = useState(props.cardNumber);
  const [inviteCode, setInviteCode] = useState(props.code);

  function getIconURL (size = 128) {
    if (cardData && cardData.guild) {
      var guildID = cardData.guild.id;
      var iconID = cardData.guild.icon;
      if (iconID === 'undefined.png') {
        return null;
      }
      return (
        'https://cdn.discordapp.com/icons/' +
        guildID +
        '/' +
        iconID +
        '.png?size=' +
        size
      );
    }
    return null;
  }

  function renderCard () {
    if (cardData && cardData.guild) {
      var cardIcon = getIconURL(256);
      console.log('Rendering card ' + cardNumber);
      return (
        <Zoom duration = "750">
          <div className="CardTop">
            <CardBackground className="Background" bgImage={cardIcon} />
            <CardAvatar className="Avatar" avatar={cardIcon} />
            <CardJoin className="CardButton">
              <div className="CardButtonText">
                <FontAwesomeIcon icon={faSignInAlt} />&nbsp;&nbsp;Join Now
              </div>
            </CardJoin>
            <div className="info">
              <h3>{cardData.guild.name}</h3>
            </div>
          </div>
          <div className="main__content">
            <div className="upper__card">
              <div className="info2">
                <div className="pill">
                  <i className="fa fa-circle online" aria-hidden="true" />
                  {cardData.approximate_presence_count} online<div className="spacer"/>
                </div><div className="spacer"/>
                <div className="pill">
                  <i className="fa fa-circle" aria-hidden="true" />
                  {cardData.approximate_member_count} members<div className="spacer"/>
                </div><div className="spacer"/>
              </div>
            </div>
          </div>
        </Zoom>
      );
    }
  }

  // called each time a parent renders this component to a client DOM

  return <div>{renderCard()}</div>;
}

/*
ServerCard.defaltProps = {
    bgimage: '',
    avatar: '',
    title: 'default title',
    subtitle: 'default subtitle',
    online: '0',
    total: '0'
  };
*/

export default ServerCard;
