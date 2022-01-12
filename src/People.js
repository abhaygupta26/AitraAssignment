const People = (props) => {
  return (
    <div className="row">
      <div className="col-md-2 ms-2">
        <img src={props.image} className="people-image" />
      </div>
      <div className="col-md-4 ms-4">
        <p>
          {props.textName}
          <br />
          <span style={{ color: "#969290" }}>{props.textDesignation}</span>
        </p>
      </div>
      <div className="col-md-4 ms-2">
        {/* <button style={{ borderRadius: "20%" }}>FOLLOW</button> */}
        <button
          style={{ borderRadius: "20%" }}
          type="button"
          class="btn btn-outline-primary"
        >
          FOLLOW
        </button>
      </div>
    </div>
  );
};
export default People;
