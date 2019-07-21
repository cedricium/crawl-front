// REACT HOOKS! <3

import React from 'react';
import { ScalingSquaresSpinner } from 'react-epic-spinners';
import styled from 'styled-components';
import _ from 'lodash';

console.log(_.join(['Another', 'module', 'loaded!'], ' '));

const LoadingWrapper = styled.div`
  display: inline-block;
  text-align: center;
  margin-left: 0%;
  width: 100%;
`;

function LoadingIndicator () {
  return (
    <LoadingWrapper className="wrapLoader">
      <ScalingSquaresSpinner className="loading" size={50} />
    </LoadingWrapper>
  );
}

export default LoadingIndicator;
