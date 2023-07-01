import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="container">
      <h1> Inventory Management System</h1>
      <h2>Login Page</h2>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

ReactDOM.render(<LoginPage />, document.getElementById('root'));

export default LoginPage