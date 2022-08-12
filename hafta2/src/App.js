import React, { useState } from 'react';

import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  const initialState = { username: 'admin', password: 'admin' };
  const [userInfo, setUserInfo] = useState(initialState);
  const [isLogged, setIsLogged] = useState(false);
  const [inputControl, setInputControl] = useState({
    inputValue: '',
    passWordValue: '',
  });

  const data = {
    userInfo,
    setUserInfo,
    isLogged,
    setIsLogged,
    inputControl,
    setInputControl,
  };

  return (
    <div>
      <LoginPage data={data} />
    </div>
  );
}

export default App;
