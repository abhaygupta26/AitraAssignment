import { RiGalleryUploadLine } from "react-icons/ri";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { SiSimpleanalytics } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";

const WritingPost = () => {
  return (
    <div style={{ border: "1px solid white", backgroundColor: "white" }}>
      <div className="row">
        <div className="col-md-2 ms-2 mt-3">
          <img src="/images/User.jpg" className="people-image" />
        </div>
        <div className="col-md-8 mt-4">
          <p style={{ color: "#969290" }}>Write something ...</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-1 my-2 ms-2">
          <RiGalleryUploadLine style={{ fontSize: "30px" }} />
        </div>
        <div className="col-md-1 my-2">
          <VscDeviceCameraVideo style={{ fontSize: "30px" }} />
        </div>
        <div className="col-md-1 my-2">
          <SiSimpleanalytics style={{ fontSize: "20px" }} />
        </div>
        <div className="col-md-1 my-2">
          <BsYoutube style={{ fontSize: "30px", color: "red" }} />
        </div>
        <div className="col-md-1 my-2 ms-auto me-5">
          <SiTelegram style={{ fontSize: "30px", color: "blue" }} />
        </div>
      </div>
    </div>
  );
};

export default WritingPost;