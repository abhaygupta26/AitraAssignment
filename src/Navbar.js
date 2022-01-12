import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { HiUserGroup, HiTrendingUp } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FcSearch } from "react-icons/fc";
import * as ReactBootstrap from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ReactBootstrap.Navbar style={{backgroundColor:"white"}} expand="lg">
      <ReactBootstrap.Container fluid>
        <ReactBootstrap.Navbar.Brand className="me-5 h6" href="/">
          <img src="/images/Mudda.png" alt="Logo" style={{ height: "90px" }} />
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
        <ReactBootstrap.Navbar.Collapse id="navbarScroll">
          <ReactBootstrap.Nav
            className="justify-content-center"
            style={{ maxHeight: "100px", flex: 1 }}
            navbarScroll
          >
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-default" : "nav-active"
              }
              to="/"
            >
              <MdHomeFilled style={{ fontSize: "35px", width: "50%" }} />
              Home
            </NavLink>

            <NavLink
              exact={true}
              className={(navData) =>
                navData.isActive ? "nav-default" : "nav-active"
              }
              to="/trending"
            >
              <HiTrendingUp style={{ fontSize: "35px", width: "60%" }} />
              Trending
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-default" : "nav-active"
              }
              to="/group"
            >
              <HiUserGroup style={{ fontSize: "35px", width: "50%" }} />
              Group
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-default" : "nav-active"
              }
              to="/notifications"
            >
              <IoNotificationsOutline
                style={{ fontSize: "35px", width: "70%" }}
              />
              Notifications
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-default" : "nav-active"
              }
              to="/profile"
            >
              <CgProfile style={{ fontSize: "35px", width: "60%" }} />
              Profile
            </NavLink>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Form className="d-flex">
            <ReactBootstrap.FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </ReactBootstrap.Form>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  );
};

export default Navbar;
