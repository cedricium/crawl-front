/* eslint-disable no-unused-vars */

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


const ServerCardGrid = () => {
  const [serverList, setServerList] = useState([]);
  const [hasPulledServers, setPulled] = useState(false);
  const [serverCount, setServerCount] = useState(0);
  const [lastReceivedID, setLastReceivedID] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  function appendServerList (data) {
    setServerList(serverList + data);
  }

  useEffect(() => {
    console.log('useEffect called');
    if (serverCount === 0) { // lets only fetch the whole list once
      try {
        (async () => {
          console.log('hasPulledServers: ' + hasPulledServers + ' Server count: ' + serverCount);
          let res = await fetch("http://localhost:8000/api/Discord_Server");
          let response = await res.json();
          setServerList(response);
          var ct = 0;
          var lastID = 0;
          var dorah = response.map(function (server) {
            ct += 1;
            lastID = server.id;
          });
          setServerCount(ct);
          setPulled(true);
          setLastReceivedID(lastID);
          console.log('Last ID: ' + lastID);
        })();
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        if (!isFetching) {
          console.log('FETCHING');
          setInterval(async () => {
            setIsFetching(true);
            console.log('10 seconds has passed, last received ID: ' + lastReceivedID);
            let res = await fetch("http://localhost:8000/api/Discord_Server/?last_received=" + lastReceivedID);
            let response = await res.json();
            var ct = 0;
            var lastID = 0;
            var dorah = response.map(function (server) {
              lastID = server.id;
            });

            if (lastID > lastReceivedID) {
              console.log('NEW SERVERS DETECTED');
              var aList = serverList;
              aList.unshift(response);
              setLastReceivedID(lastID);
              console.log('Last ID: ' + lastID);
              console.log('Setting last received ID to ' + lastID);
              //serverList.unshift(response);
            }
          }, 10000);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [lastReceivedID]);


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
        if (server) {
          count++; // we use the count to control animation delay
          if (count <= 20000) {
            paginateServers.unshift(<li key={count}>
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
            { paginateServers }
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
