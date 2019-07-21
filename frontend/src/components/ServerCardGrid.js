import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ServerCard from './ServerCard';
import Fire from '../config/Fire';
import LoadingIndicator from './Loading';
import '../styles/ServerCardGrid.css';

const Centered = styled.div`
  width: ${window.innerWidth};
  margin: 0 auto;
  padding-top: 5vw;
`;

function ServerCardGrid (props) {
  const [serverList, setServerList] = useState([]);
  const [hasPulledServers, setPulled] = useState(false);
  const [serverCount, setServerCount] = useState(0);

  useEffect(() => {
    console.log('useEffect() called');
    setPulled(false);
    Fire.database()
      .ref('servers')
      .on('value', snapshot => {
        const snapVal = snapshot.val();
        setServerCount(Object.keys(snapVal).length);
        setServerList(snapVal);
        setPulled(true);
      });
  }, [serverCount]);
  // ^^ passing the count makes sure React only calls
  // this when the count changes

  function renderLoadingIndicator () {
    if (!hasPulledServers) {
      return (
        <Centered>
          <LoadingIndicator isLoading>Loading</LoadingIndicator>
        </Centered>
      );
    } else {
      return null;
    }
  }

  function renderGrid (page) {
    var paginateServers = [];
    if (serverList && serverCount > 0) {
      var count = 0;
      Object.keys(serverList).map((servers) => {
        if (servers && serverList[servers] && serverList[servers]['guild']) {
          count++; // we use the count to control animation delay
          if (count <= 20) {
            paginateServers.push(<li key={count}>
              <ServerCard
                cardNumber={count}
                key={count}
                code={serverList[servers]['code']}
                data={serverList[servers]}
              /></li>);
          }
        }
      });
      return (<ul>{ paginateServers }</ul>);
    }
  }

  return (
    <div>
      { renderLoadingIndicator() }
      <div className="servergrid">
        { renderGrid() }
      </div>
    </div>
  );
}

export default ServerCardGrid;
