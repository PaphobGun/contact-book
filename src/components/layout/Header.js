import React from 'react';

const Header = () => {
  return (
    <div className="text-center bg-danger header">
      <h1 className="display-4 mb-5 text-white">
        <i className="fas fa-users d-none d-sm-block" />
        <span style={{ fontWeight: '500' }}>Contact Book</span>
      </h1>
    </div>
  );
};

export default Header;
