import React from 'react';
import Lane from '../components/Lane';

const Lanes = ({ lanes }) => {

  const children = lanes.map(lane => (
    <Lane className="lane" lane={lane} key={lane.id} />
  ));

  return <div className="lanes">{children}</div>;
};

export default Lanes;
