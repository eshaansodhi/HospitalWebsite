import React from 'react';

const Header = () => {
  return (
    <nav style={{ backgroundColor: 'white', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '10px' }}><a href="/">Home</a></li>
        <li style={{ marginRight: '10px' }}><a href="/appointment">Appointment</a></li>
        <li style={{ marginRight: '10px' }}><a href="/cart">Cart</a></li>
        <li style={{ marginRight: '10px' }}><a href="/contact">Contact</a></li>
        <li style={{ marginRight: '10px' }}><a href="/login">Login</a></li>

      </ul>
    </nav>
  );
};

export default Header;
