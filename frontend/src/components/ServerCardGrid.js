import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ServerCard from './ServerCard';
import LoadingIndicator from './Loading';
import '../styles/ServerCardGrid.css';


const Centered = styled.div `
    width:        ${window.innerWidth};
    margin:       0 auto;
    padding-top:  5vw;
`;


const ServerCardGrid = ( ) => {

  const [ serverList,       setServerList   ] = useState(   [ ]  );
  const [ hasPulledServers, setPulled       ] = useState(  false );
  const [ serverCount,      setServerCount  ] = useState(    0   );  
  const [ newServers,       setNewServers   ] = useState(  false );
  
  useEffect( ( ) => {

    if ( !hasPulledServers ) {

      ( async ( ) => {

        let res = await fetch ("http://localhost:8000/api/Discord_Server");

        let response = await res.json ( );

        // update states
        setServerList (response);
        console.log   (response)

        let ct=0, last_id = 0;

        let dorah = response.map ( function( server ) {
          ct += 1;
          last_id = server.id;
          console.log('last ID: ' + server.id);
        });

        setServerCount(ct);
        setPulled(true);

        console.log('Count: ' + ct)
      })();
    }
  }, []);
    

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
      serverList.map((server) => {
        console.log('rendering server ' + server['invite_link']);
        if (server) {
          count++; // we use the count to control animation delay
          if (count <= 20000) {
            paginateServers.push(<li key={count}>
              <ServerCard
                cardNumber={count}
                key={count}
                code={server['invite_link']}
                data={server}
              /></li>);
          }
        }
      });
      return (
        <div>
          <ul>
            <li>
              This is a new server
            </li>
            <li>
              This is a new server
            </li>
            <li>
              This is a new server
            </li>
          </ul>
          <ul>
            { paginateServers.reverse() }
          </ul>

        </div>
      );
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
};


export default ServerCardGrid;
