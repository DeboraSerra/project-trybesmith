import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context, url } from '../context/Provider';

function Register({ close }) {
  const [state, setState] = useState({
    username: '',
    password: '',
    pass2: '',
    classe: '',
    level: 0,
  });
  const {
    username, classe, level, password, pass2,
  } = state;
  const [valid, setValid] = useState(true);
  const { setProvider } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    const isValidUser = typeof username === 'string' && username.length >= 3;
    const isValidClasse = typeof classe === 'string' && classe.length >= 3;
    const isValidLevel = typeof level === 'number' && level >= 1;
    setValid(!isValidUser || !isValidClasse || !isValidLevel);
  }, [username, classe, level, pass2, password]);

  const handleSubmit = async () => {
    const obj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }
    const response = await fetch(`${url}/users`, obj);
    const data = await response.json();
    console.log(data);
    if (data.message) {
      return;
    }
    localStorage.setItem('token', data);
    setProvider((prevSt) => ({
      ...prevSt,
      token: data,
    }));
    close();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={valid}>
        Register
      </button>
    </form>
  );
}

Register.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Register;
