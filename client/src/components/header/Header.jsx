import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import "./header.css";
import toast from "react-hot-toast";
const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const isUser = JSON.parse(localStorage.getItem("user"));
  const logoutUser = () => {
    setShow(!show);
    toast.success("user Logout Successfully");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };
  return (
    <header className="header">
      <div className="logo">Expense Traker</div>
      <nav className="nav">
        <ul className="nav-ul">
          <Link className=" dashboard" onClick={() => setShow(!show)}>
            {isUser ? isUser?.user?.name : "Dashboard"}
            <IoIosArrowDropdown size={20} style={{ marginLeft: ".5rem" }} />
          </Link>
          <ul className={show ? "showDropdown" : "dropdown"}>
            {isUser ? (
              <button className="nav-li" onClick={logoutUser}>
                Logout
              </button>
            ) : (
              <>
                <Link
                  className="nav-li"
                  to="/register"
                  onClick={() => setShow(!show)}
                >
                  Register
                </Link>
                <Link
                  className="nav-li"
                  to="/login"
                  onClick={() => setShow(!show)}
                >
                  Login
                </Link>
              </>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
