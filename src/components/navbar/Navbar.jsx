import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const onHandle = () => {
    dispatch(logout()).then(() => {
      window.location.reload(true);
    });
  };

  // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-lg">
      <div className="container">
        <div className="navbar-brand">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} className="logo img-fluid" alt="Kind Heart Charity" />
          <span>
            Kind Heart Charity
            <small>Non-profit Organization</small>
          </span>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link click-scroll">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/charity" className="nav-link click-scroll">
                Charity
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/mycharity" className="nav-link click-scroll">
                My Charity
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
                                <div className="nav-link click-scroll dropdown-toggle"
                                    id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">My Charity</div>

                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><div className="dropdown-item" >News Listing</div></li>

                                    <li><div className="dropdown-item" >News Detail</div></li>
                                </ul>
                            </li> */}

            <li className="nav-item">
              <div className="nav-link click-scroll">Contact</div>
            </li>

            <li className="nav-item ms-3">
              {isLoggedIn ? (
                <button onClick={onHandle} className="nav-link custom-btn custom-border-btn btn">
                  Logout
                </button>
              ) : (
                <Link to={`${process.env.PUBLIC_URL}/login`} className="nav-link custom-btn custom-border-btn btn">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
