import React from 'react';

const Spinner = () => {
  return (
    <div className="container my-5 text-center">
      <div
        className="spinner-border text-secondary"
        style={{
          width: '80px',
          height: '80px'
        }}
        role="status"
      />
      <h1 className="mt-5 display-4 text-secondary">Loading Please Wait...</h1>
    </div>
  );
};

export default Spinner;
