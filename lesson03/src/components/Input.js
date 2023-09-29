import React from 'react';

const Input = ({ placeholder, hasButton = false }) => {
  return (
    <div
      style={{
        borderBottomWidth: '1px',
        borderBottomColor: 'red',
      }}
    >
      <input type="text" placeholder={placeholder} />
      {hasButton && <button>show</button>}
    </div>
  );
};

export default Input;
