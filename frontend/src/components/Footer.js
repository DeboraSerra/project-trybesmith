import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex justify-center">
      <p className="my-5 text-lg text-lightest-gray">
        Developed by
        {' '}
        <a className="hover:opacity-80" href="https://github.com/DeboraSerra">
          Débora Serra
        </a>
      </p>
    </footer>
  )
}

export default Footer;
