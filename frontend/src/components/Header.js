import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactModal from 'react-modal';
import { Context } from '../context/Provider';
import Login from './Login';

const link = "text-xl hover:opacity-80 active:text-accent";

const Header = () => {
  const [modal, setModal] = useState(false);
  const { route } = useContext(Context);
  const open = () => setModal(true);
  const close = () => setModal(false);
  return (
    <header className="w-full flex justify-between p-8">
      <NavLink className="text-4xl" to="/">Welcome to Trybesmith!</NavLink>
      <nav className="grow flex justify-between mx-32">
        <NavLink className={ link } to="/order">
          Order your weapon
        </NavLink>
        <NavLink className={ link } to="/products">
          See products list
        </NavLink>
        <p className={ link } onClick={ open }>Login</p>
      </nav>
      <ReactModal
        isOpen={ modal }
        onRequestClose={ close }
      >
        {route === 'login' && <Login close={ close } />}
      </ReactModal>
    </header>
  )
}

export default Header;
