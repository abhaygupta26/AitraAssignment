import { RiChat3Line } from "react-icons/ri";

const Issues = (props) => {
  return (
    <>
      <hr className="ms-3 me-3"></hr>
      <div className="row mt-2">
        <div className="col-md-8 ms-3">
          <h6>{props.headline}</h6>
          <div className="row">
            <div className="col-md-9" style={{ fontSize: "13px" }}>
              Dharbhanga{" "}
              <div style={{ border: "1px solid black", width: "1%" }}></div>{" "}
              <span style={{ color: "blue" }}>(Politics)</span>
            </div>
            <div className="col-md-3">
              <RiChat3Line style={{ fontSize: "25px" }} /> {props.messages}
            </div>
          </div>
        </div>
        <div
          className="col-md-3"
          style={{
            border: "1px solid black",
            width: "22%",
            borderRadius: "20%",
            padding:"0px"
          }}
        >
          <img
            src={props.image}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "20%",
            }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Issues;
