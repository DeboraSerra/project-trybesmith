import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Context, url } from '../context/Provider';

function Login({ close }) {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const { username, password } = state;
  const [error, setError] = useState('');
  const { setProvider } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }
    const response = await fetch(`${url}/login`, obj);
    const data = await response.json();
    console.log(data)
    if (data.message) {
      setError(data.message);
      return;
    }
    localStorage.setItem('token', data);
    setProvider((prevSt) => ({
      ...prevSt,
      token: data,
      route: '',
    }));
    close();
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      <button
        type="button"
        onClick={() => setProvider((prevSt) => ({
          ...prevSt,
          route: 'register',
        }))}
      >
        Register

      </button>
    </form>
  );
}

Login.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Login;
