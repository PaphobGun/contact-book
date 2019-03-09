import React from 'react';

// Description for each tool that being used
const Tool = props => {
  const { tool, description } = props;

  return (
    <li className="list-group-item">
      <h4>{tool}</h4>
      <hr />
      <p className="lead">{description}</p>
    </li>
  );
};

export default Tool;
