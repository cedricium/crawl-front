import React from 'react';
import _ from 'lodash';

console.log(_.join(['Another', 'module', 'loaded!'], ' '));

// homepage
function All () {
  return (
    <div>
      <h3>All Servers</h3>
    </div>
  );
}

export default All;
