import { BiBadgeCheck } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import People from "./People";

const HomeLeft = () => {
  return (
    <div className="col-md-3 me-3">
      <div
        style={{
          height: "auto ",
          border: "1px solid white",
          backgroundColor: "white",
        }}
      >
        <img
          className="center-image"
          src="/images/Dp.jpg"
          style={{
            borderRadius: "50%",
          }}
        />
        <h6 style={{ textAlign: "center", marginTop: "10px" }}>
          Narindra Modi
          <BiBadgeCheck
            style={{
              marginLeft: "10px",
              fontSize: "20px",
              marginBottom: "3px",
              color: "green",
            }}
          />
        </h6>
        <p style={{ textAlign: "center", fontSize: "13px" }}>
          Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS
          & android) and creative projects. Open to others.
        </p>
        <div className="row" style={{ margin: "auto" }}>
          <div
            style={{
              borderRight: "1px solid black",
              marginLeft: "20px",
              textAlign: "center",
              backgroundColor: "#F4F6F6",
              height: "50px",
            }}
            className="col-md-5"
          >
            <p>
              Followers
              <br /> 523
            </p>
          </div>
          <div
            style={{
              borderLeft: "1px solid black",
              textAlign: "center",
              backgroundColor: "#F4F6F6",
              height: "50px",
            }}
            className="col-md-5"
          >
            <p>
              Following
              <br /> 310
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "10px 0px" }}>
          <NavLink to="/profile" style={{ textDecoration: "none" }}>
            Manage Profile
          </NavLink>
        </div>
      </div>
      <div
        style={{
          border: "1px solid white",
          marginTop: "50px",
          backgroundColor: "white",
        }}
      >
        <h6 style={{ padding: "20px 10px" }}>PEOPLE YOU MAY KNOW</h6>
        <People
          image="/images/Steve.jpg"
          textName="Steve Jobs"
          textDesignation="CEO of Apple"
        />
        <People
          image="/images/Dylan.jpg"
          textName="Ryan Ros"
          textDesignation="CEO of Linkedin"
        />
        <People
          image="/images/Ryan.jpg"
          textName="Dylan Field"
          textDesignation="CEO of Figma"
        />
        <hr style={{ width: "85%" }} className="ms-4" />
        <div style={{ textAlign: "center", margin: "10px 0px" }}>
          <NavLink to="/group" style={{ textDecoration: "none" }}>
            See All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
