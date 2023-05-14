import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nagavitation() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        Homepage
      </NavLink>
      <NavLink to="/video" className="nav-link">
        Video
      </NavLink>
      <NavLink to="/product" className="nav-link">
        Product
      </NavLink>
    </nav>
  );
}
