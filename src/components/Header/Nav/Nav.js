import React from 'react';
import {
  Link
} from "react-router-dom";

import classes from './Nav.module.scss';

function Nav(props) {

  return<ul className={classes.nav}>
    <li>
      <Link to="/play">Play</Link>
    </li>
    <li>
      <Link to="/settings">Settings</Link>
    </li>
    <li>
      <Link to="/summary">Summary</Link>
    </li>
  </ul>
}

export default Nav;