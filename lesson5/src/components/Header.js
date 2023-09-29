import React from 'react';

const Header = ({ count }) => {
  // if (count === 0) return <></>;
  return <>{count > 0 && <h2>{count}</h2>}</>;
};

export default Header;
