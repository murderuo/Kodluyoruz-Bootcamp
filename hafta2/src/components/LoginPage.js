import MainPage from './MainPage';
import React, { useState } from 'react';
import { UsernameDiv, PasswordDiv, SubmitButton } from '../styledcomponents/';

function LoginPage({ data }) {
  const [message, setMessage] = useState('');
  const { isLogged, setIsLogged, inputControl, setInputControl } = data;

  //function login

  const handleLoginControl = e => {
    e.preventDefault();

    if (
      inputControl.inputValue === 'admin' &&
      inputControl.passWordValue === 'admin'
    ) {
      setIsLogged(true);
    } else {
      setMessage('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <>
      {!isLogged && (
        <div className="container">
          <form onSubmit={handleLoginControl}>
            <UsernameDiv className="username-div">
              <label>Kullanıcı adı:</label>
              <input
                type="text"
                // value={inputControl.inputValue}
                onChange={e => {
                  setInputControl({
                    ...inputControl,
                    inputValue: e.target.value,
                  });
                  setMessage('');
                }}
              />
            </UsernameDiv>
            <PasswordDiv className="password-div">
              <label>Şifre :</label>
              <input
                type="password"
                // value={inputControl.passWordValue}
                onChange={e => {
                  setInputControl({
                    ...inputControl,
                    passWordValue: e.target.value,
                  });
                  setMessage('');
                }}
              />
            </PasswordDiv>
            <SubmitButton className="submitbutton">
              <button type="submit">Giriş</button>
            </SubmitButton>
            <div className="message">{message}</div>
          </form>
        </div>
      )}

      {isLogged && <MainPage />}

      {/* {JSON.stringify(inputControl)} */}
    </>
  );
}

export default LoginPage;
