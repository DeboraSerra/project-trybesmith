import React, {
  createContext, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
export const url = 'http://localhost:3001';

function Provider({ children }) {
  const [state, setState] = useState({
    token: '',
    route: 'login',
  });

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    setState({
      ...state,
      token,
    });
  }, []);

  const value = useMemo(() => ({
    ...state,
    setProvider: setState,
  }), []);
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
