const GroupsComponent = (props) => {
  return (
    <div
      className="mt-3 mx-3"
      style={{
        border: "1px solid #F4F6F6",
        borderRadius: "10%",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 4px 10px",
      }}
    >
      <div className="row">
        <div className="col-md-3 ms-2 mt-1">{props.place}</div>
        <div className="col-md-3 mt-2 ms-4" style={{ textAlign: "center" }}>
          <span style={{ color: "#969290" }}>Members</span>
          <br /> {props.members}
        </div>
        <div className="col-md-3 mt-2 ms-2" style={{ textAlign: "center" }}>
          <span style={{ color: "#969290" }}>Posts</span>
          <br />
          {props.posts}
        </div>
      </div>
      <div
        style={{
          width: "30%",
          border: "1px solid blue",
          borderTopRightRadius: "20%",
          borderBottomLeftRadius: "30%",
          color: "white",
          backgroundColor: "blue",
          textAlign: "center",
        }}
      >
        {props.placeCategory}
      </div>
    </div>
  );
};

export default GroupsComponent;
