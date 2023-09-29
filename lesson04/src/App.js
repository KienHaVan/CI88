import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  return (
    <>
      <h1>{count}</h1>
      <h1>{input}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Click
      </button>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  );
};

export default App;
