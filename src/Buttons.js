import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="row mt-5" style={{ margin: "10px 0px" }}>
      <NavLink
        style={{
          borderTopLeftRadius: "5px",
        }}
        className={(navData) =>
          navData.isActive
            ? "col-md-3 buttons-active"
            : "col-md-3 buttons-default"
        }
        to="/"
      >
        <div
          style={{
            margin: "10px 0px",
            padding: "5px 0px",
          }}
        >
          Problems
        </div>
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "col-md-3 buttons-active"
            : "col-md-3 buttons-default"
        }
        to="/group"
      >
        <div
          style={{
            margin: "10px 0px",
            padding: "5px 0px",
          }}
        >
          Issues
        </div>
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "col-md-3 buttons-active"
            : "col-md-3 buttons-default"
        }
        to="/about"
      >
        <div
          style={{
            margin: "10px 0px",
            padding: "5px 0px",
          }}
        >
          Facts
        </div>
      </NavLink>
      <NavLink
        style={{
          borderTopRightRadius: "5px",
        }}
        className={(navData) =>
          navData.isActive
            ? "col-md-3 buttons-active"
            : "col-md-3 buttons-default"
        }
        to="/notifications"
      >
        <div
          style={{
            margin: "10px 0px",
            padding: "5px 0px",
          }}
        >
          Works
        </div>
      </NavLink>
    </div>
  );
};

export default Buttons;
