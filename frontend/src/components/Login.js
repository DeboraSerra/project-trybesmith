import React, { useContext, useState } from 'react';
import { Context, url } from '../context/Provider';

const Login = ({ close }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const { username, password } = state;
  const { setProvider } = useContext(Context);

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    const response = await fetch(`${url}/login`);
    const data = await response.json()
    localStorage.setItem('token', data);
    setProvider((prevSt) => ({
      ...prevSt,
      token: data,
    }))
    close();
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        name="username"
        value={ username }
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        value={ password }
        onChange={ handleChange }
      />
      <button type="submit">Login</button>
      <button type="button">Register</button>
    </form>
  )
}

export default Login;
