import React from 'react';

export default ({notes}) => {

  const noteItems = notes.map(({id, task}) => <li key={id}>{task}</li>);
  return <ul>{noteItems}</ul>;
}
