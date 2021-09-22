import React from "react";
import "./Topbar.css";
import {BsPersonFill} from "react-icons/bs"
import { GrMail } from "react-icons/gr";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Freelancer
          </a>
          <div className="itemContainer">
            <BsPersonFill className="icon" />
            <span>+123 456 789</span>
          </div>
          <div className="itemContainer">
            <GrMail className="icon" />
            <span>freelancer@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
