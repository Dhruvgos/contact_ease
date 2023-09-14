import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    // Check the login status in localStorage when the component mounts.
    if (localStorage.length > 0) {
      setLogOut(true);
    }
    // console.log('logOut:', isLoggedIn); // Add this line for debugging.
  }, [localStorage.length]);

  const handleLogout = () => {
    // Clear localStorage and update the state.
    // localStorage.removeItem('isLoggedIn');
    localStorage.clear();
    setLogOut(false);
    navigate("/login");
  };

  return (
    <div>
      <nav  data-bs-theme="dark" className="navbar  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          ContactEase
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
               <li>
                <Link to="/about" className="nav-link active" aria-current="page">
                
                  About
                </Link>
                </li> 
            </ul>
            {!logOut ? (
              <Link to="/login" className="btn btn-primary mx-2" role="button">
                Login
              </Link>
            ) : (
              ""
            )}
            {!logOut ? (
              <Link to="/signup" className="btn btn-primary mx-2" role="button">
              Signup
            </Link>
            ) : (
              ""
            )}
            {logOut ? (
              <Link onClick={handleLogout} to="/login" className="btn btn-light mx-1" role="button">
<svg style={{color:'black' }} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 1000 1000" width="20"><path fill="currentColor" d="M242-164q-33.7 0-55.85-22.15T164-242v-476q0-33.7 22.15-55.85T242-796h216q9.3 0 16.15 6.789 6.85 6.79 6.85 16Q481-764 474.15-757q-6.85 7-16.15 7H242q-12 0-22 10t-10 22v476q0 12 10 22t22 10h216q9.3 0 16.15 6.789 6.85 6.79 6.85 16Q481-178 474.15-171q-6.85 7-16.15 7H242Zm461-294H410.963q-9.284 0-16.124-6.789-6.839-6.79-6.839-16Q388-490 394.839-497q6.84-7 16.124-7H703l-58-58q-9-9-9.5-19.071-.5-10.072 9.5-18Q655-607 662.5-606t15.5 9l90 90q12 11.636 12 26.818Q780-465 768-453l-89 89q-7 7-16 8t-17.478-8Q636-372 635-380.5t9-18.5l59-59Z"/></svg>
              Logout
            </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
