import React from 'react';
import './app.css';
import Input from './components/Input';
import Card from './components/Card';

const App = () => {
  const name = 'Kevin';
  return (
    <>
      <div className="app">
        <h1 className="header">Hello {name}!</h1>
      </div>
      <Input placeholder="username" />
      <Input placeholder="email" />
      <Input placeholder="password" hasButton={true} />
      <Input placeholder="confirm password" hasButton={true} />
      <Card>
        <h1 className="header">Hello {name}!</h1>
      </Card>
    </>
  );
};

export default App;
