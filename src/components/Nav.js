import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" aria-label="Home">
        <FaHome />
      </Link>
      <Link to="/add" aria-label="Add Trip">
        <FaCalendarDay />
      </Link>
      <Link to="/list" aria-label="Trip List">
        <FaList />
      </Link>
    </nav>
  );
};
