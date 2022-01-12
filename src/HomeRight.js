import { NavLink } from "react-bootstrap";
import GroupsComponent from "./GroupsComponent";
import Issues from "./Issues";

const HomeRight = () => {
  return (
    <div className="col-md-3">
      <div style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-md-5 mt-3 ms-4">
            <h6>MY GROUPS</h6>
          </div>
          <NavLink className="col-md-5 mt-1 ms-4" to="/group">
            <div>+ADD NEW</div>
          </NavLink>
        </div>
        <GroupsComponent
          place="Bharat"
          members="528"
          posts="28K"
          placeCategory="Country"
        />
        <GroupsComponent
          place="New Delhi"
          members="528"
          posts="28K"
          placeCategory="State"
        />
        <GroupsComponent
          place="Arunachal Pradesh"
          members="528"
          posts="28K"
          placeCategory="State"
        />
        <hr className="ms-3 me-3"></hr>
        <NavLink to="/group" style={{ textAlign: "center" }}>
          SEE ALL
        </NavLink>
      </div>
      <div
        className="mt-4"
        style={{ border: "1px solid white", backgroundColor: "white" }}
      >
        <h6 className="mt-3 ms-4">TRENDIND ISSUES</h6>
        <Issues headline="Did Procreate change the new illustration and why?" messages="356" image="/images/HeadingOne.jpg" />
        <Issues headline="Did Procreate change the new illustration and why?" messages="218" image="/images/HeadingTwo.jpg" />
        <Issues headline="Did Procreate change the new illustration and why?" messages="189" image="/images/HeadingThree.jpg" />
        <Issues headline="Did Procreate change the new illustration and why?" messages="42"  image="/images/HeadingFour.jpg"/>
      </div>
    </div>
  );
};

export default HomeRight;
