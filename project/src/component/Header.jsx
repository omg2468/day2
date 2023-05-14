import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {

  return (
    <div
         className="navbar_container position-fixed top-0 z-2 d-flex justify-content-center align-items-start"
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu/1">
                  Thực đơn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/new">
                  Tin tức
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Liên hệ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Giỏ hàng
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <form className="d-flex align-items-center position-relative">
        <div className="search position-relative" id="search">
          <input
            className="form-control me-2"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="sreach_result position-absolute text-bg-light" />
        </div>
        <div className="cart">
          <Link to="/cart">
            <i className="bi bi-cart4 m-3" />
          </Link>
          <div className="cart_number">0</div>
        </div>
      </form>
    </div>
  );
}
