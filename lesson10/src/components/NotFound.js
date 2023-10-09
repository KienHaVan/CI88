import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <button
          style={{
            width: '200px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: '1px',
            backgroundColor: 'green',
          }}
        >
          Move to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
