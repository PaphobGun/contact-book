import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

NavItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string
};

export default NavItem;
