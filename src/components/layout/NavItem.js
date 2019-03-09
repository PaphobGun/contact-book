import React from 'react';
import { Link } from 'react-router-dom';

// Navitem
const NavItem = props => {
  const { icon, text, path } = props;

  return (
    <li className="nav-item">
      <Link to={path} className="nav-link">
        <i className={icon} /> {text}
      </Link>
    </li>
  );
};

export default NavItem;
