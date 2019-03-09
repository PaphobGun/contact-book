import React from 'react';

const Detail = props => {
  const { title, para } = props;

  return (
    <>
      <h3 className="card-title">{title}</h3>
      <p className="lead mb-3">{para}</p>
    </>
  );
};

export default Detail;
