import React from 'react';
import {
  Link
} from "react-router-dom";

import classes from './Nav.module.scss';

function Nav(props) {

  return<ul className={classes.nav}>
    <li className={classes.nav__item}>
      <Link className={classes.nav__link} to="/play">Play</Link>
    </li>
    <li className={classes.nav__item}>
      <Link className={classes.nav__link} to="/settings">Settings</Link>
    </li>
    <li className={classes.nav__item}>
      <Link className={classes.nav__link} to="/summary">Summary</Link>
    </li>
  </ul>
}

export default Nav;