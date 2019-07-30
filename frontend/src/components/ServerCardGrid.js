/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ServerCard from './ServerCard';
import LoadingIndicator from './Loading';
import '../styles/ServerCardGrid.css';
import useInterval from './useInterval';

const Centered = styled.div `
  display: inline-block;
  text-align: center;
  margin-left: 0%;
  width: 100%;
`;


const ServerCardGrid = () => {
  let [serverList, setServerList] = useState([]);
  let [hasPulledServers, setPulled] = useState(false);
  let [serverCount, setServerCount] = useState(0);
  let [lastReceivedID, setLastReceivedID] = useState(0);

  function countObjects (obj) {
    return Object.keys(obj).length;
  }

  useInterval(() => {
    try {
      (async () => {
        let res = await fetch("http://localhost:8000/api/Discord_Server/?last_received=" + (lastReceivedID + 1));
        let response = await res.json();
        var lastID = 0;
        let aList = [];

        var dorah = response.map(function (server) {
          lastID = server.id;
        });

        if (lastID > lastReceivedID) {
          var aList2 = serverList;

          var dorah2 = response.map(function (server) {
            aList2.push(server);
          });

          setLastReceivedID(lastID);
          setServerList(aList2);
          let newCount = countObjects(response);
          setServerCount(serverCount + newCount);
        }
      })();
    } catch (e) {
      console.log(e);
    }
  }, 10000);

  useEffect(() => {
    if (serverCount === 0) { // lets only fetch the whole list once
      try {
        (async () => {
          let res = await fetch("http://localhost:8000/api/Discord_Server");
          let response = await res.json();
          setServerList(response);
          var ct = 0;
          var lastID = 0;
          var dorah = response.map(function (server) {
            ct += 1;
            lastID = server.id;
          });
          let ctobj = Object.keys(response).length;
          console.log('ctobj: ' + ctobj);

          setServerCount(ct);
          setPulled(true);
          setLastReceivedID(lastID);
          console.log('Last ID: ' + lastID);
        })();
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
        count++;
        if (server && count > (serverCount - 102)) {
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
            { paginateServers }
          </ul>
        </div>
      );
    }
  }


  return (
    <div>
      { renderLoadingIndicator() }
      <Centered><h2>Showing: 100 newest servers (total: {serverCount})</h2></Centered>
      <div className="servergrid">
        { renderGrid() }
      </div>
    </div>
  );
};


export default ServerCardGrid;
