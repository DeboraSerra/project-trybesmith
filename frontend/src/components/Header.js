import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-100 flex justify-between p-8">
      <h1 className="text-4xl">Welcome to Trybesmith!</h1>
      <nav className="grow flex justify-between mx-96">
        <NavLink className="text-xl" to="/">Home</NavLink>
        <NavLink className="text-xl" to="/order">Order your weapon</NavLink>
        <NavLink className="text-xl" to="/sale">Pay for you order</NavLink>
      </nav>
    </header>
  )
}

export default Header;
