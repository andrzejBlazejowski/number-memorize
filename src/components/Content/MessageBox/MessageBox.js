import React from 'react'

import classes from './MessageBox.module.scss';

function MessageBox(props) {
  return <div className={classes.messageBox}>
    {props.children}
  </div>;
}

export default MessageBox;