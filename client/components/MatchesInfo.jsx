import React from 'react';

function MatchesInfo(props) {
  return (
    <ul>
      {Object.keys(props.match).map((el) => <li>{`${el}: ${props.match[el]}`}</li>)}
    </ul>
  );
}

export default MatchesInfo;
