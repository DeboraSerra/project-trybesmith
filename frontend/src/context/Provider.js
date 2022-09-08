import React, { createContext, useEffect, useState, Component } from 'react';

export const Context = createContext();
export const url = 'http://localhost:3000';

const Provider = ({ children }) => {
  const [state, setState] = useState({
    token: '',
    route: 'login',
  });

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    setState({
      ...state,
      token,
    })
  }, [])

  const value = {
    ...state,
    setProvider: setState,
  }
  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}

export default Provider;
