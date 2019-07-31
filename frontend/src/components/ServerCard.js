/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/ServerCard.css';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const CardBackground = styled.div.attrs(props => ({
  style: { background: 'url(' + `${props.bgImage}` + ')' }
}))``;

const CardJoin = styled.div`
  float: right;
  margin-top: 4em;
  margin-right: 1em;
  position: relative;`;


function ServerCard (props) {
  const [cardData, setCardData] = useState(props.data);
  const [cardNumber, setCardNumber] = useState(props.cardNumber);
  const [inviteCode, setInviteCode] = useState(props.code);

  function getJoinURL () {
    return (
      'https://discord.gg/' + inviteCode
    );
  }

  function getIconURL (size = 128) {
    if (cardData) {
      var guildID = cardData['guild_id'];
      var iconID = cardData['guild_icon'];
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
    if (cardData) {
      var cardIcon = getIconURL(128);
      //console.log('Rendering card ' + cardNumber);
      return (
        <Zoom duration = {300}>
          <div className="CardTop">
            <CardBackground className="Background" bgImage={cardIcon} />
            <div className="Avatar" style={{ background: 'url(' + cardIcon + ')', backgroundSize: '100%' }} />

            <div className="info">
              <h3>{cardData['guild_name']}</h3>
            </div>
          </div>
          <div className="main__content">
            <div className="upper__card">
              <div className="info2">
                <div className="pill">
                  <i className="fa fa-circle online" aria-hidden="true" />
                  { cardData ['approximate_presence_count'] } online <div className="spacer"/>
                </div><div className="spacer"/>
                <div className="pill">
                  <i className="fa fa-circle" aria-hidden="true" />
                  { cardData ['approximate_member_count'] } members <div className="spacer"/>
                </div><div className="spacer"/>
              </div>
            </div>
          </div>
        </Zoom>
      );
    }
  }
  return <div>{renderCard()}</div>;
}

export default ServerCard;
