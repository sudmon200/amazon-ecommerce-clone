import React from 'react';
import Header from '../Header';

function Shell(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default Shell;
