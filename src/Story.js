import { NavLink } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { BiCheckShield } from "react-icons/bi";
import { RiChat3Line } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Story = (props) => {
  return (
    <div className="mt-4" style={{ backgroundColor: "white" }}>
      <div className="row">
        <div className="col-md-2">
          <img src={props.image} className="people-image" />
        </div>
        <div className="col-md-6" style={{ padding: "0px" }}>
          <h6>
            {props.name}
            <BiCheckShield
              style={{ fontSize: "20px", margin: "5px", color: "green" }}
            />
          </h6>
          <p>Bihar(S) Problem Government</p>
        </div>
        <div
          className="col-md-3 ms-2"
          style={{ textAlign: "center", color: "#969290" }}
        >
          {props.date}
        </div>
      </div>
      <hr className="ms-2 me-2"></hr>
      <div className="ms-2 me-2">
        <p>{props.story}</p>
      </div>
      <hr className="ms-2 me-2"></hr>
      <div className="row">
        <div
          className="row col-md-2"
          style={{ borderRight: "1px solid #F4F6F6" }}
        >
          <NavLink className="col-md-1">
            <AiOutlineLike style={{ fontSize: "25px" }} />
          </NavLink>
          <p className="col-md-1 mt-2 mx-1">672</p>
        </div>
        <div
          className="row col-md-2 ms-1"
          style={{ borderRight: "1px solid #F4F6F6" }}
        >
          <NavLink className="col-md-1">
            <AiOutlineDislike style={{ fontSize: "25px" }} />
          </NavLink>
          <p className="col-md-1 mt-2 mx-1">672</p>
        </div>
        <div
          className="row col-md-4 ms-1 me-5"
          style={{ borderRight: "1px solid #F4F6F6" }}
        >
          <NavLink className="col-md-1">
            <RiChat3Line style={{ fontSize: "25px" }} />
          </NavLink>
          <p className="col-md-1 mt-2 mx-1">672</p>
        </div>
        <div
          className="row col-md-2 ms-5"
          style={{ borderRight: "1px solid #F4F6F6" }}
        >
          <NavLink className="col-md-1">
            <IoShareSocial style={{ fontSize: "25px" }} />
          </NavLink>
          <p className="col-md-1 mt-2 mx-1">672</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
