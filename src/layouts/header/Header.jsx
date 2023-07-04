import React from 'react';
import { useLocation } from 'react-router-dom';
import 'layouts/header/styles.css';

const HIDDEN_HEADERS = ['/admin', '/register'];

function Header() {
  const location = useLocation();

  return (
    <div className={`header ${HIDDEN_HEADERS.includes(location.pathname) ? 'hidden' : ''}`}></div>
  );
}

export default Header;
