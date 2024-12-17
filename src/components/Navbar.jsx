import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  py-4">
  <div className="container-fluid">
    <a className="navbar-brand px-5 text-info fw-bold fs-1" href="#">DealsUp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item px-3  ">
          <NavLink className={'nav-link fw-bold text-info fs-5'} to="/">Home</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className={'nav-link fw-bold text-info fs-5'} to="/about">About</NavLink>
        </li>
        <li className="nav-item px-3">
        <NavLink className={'nav-link fw-bold text-info fs-5'} to="/products">Products</NavLink>
        </li>
        <li className="nav-item px-3">
        <NavLink className={'nav-link fw-bold text-info fs-5'} to="/contact">Contact</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar