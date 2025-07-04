import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/products">Products</Link>
  </nav>
);

export default Navbar;
