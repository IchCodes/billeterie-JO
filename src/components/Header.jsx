import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img src="/public/logo-officiel-JO-Paris-2024.webp" alt="logo" width="100" height="auto" />

        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
      <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
      <Link to="/register" className="btn btn-primary ">Register</Link>
      </div>
    </header>
  )
}

export default Header