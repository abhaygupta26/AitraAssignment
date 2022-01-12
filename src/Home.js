import HomeMiddle from "./HomeMiddle";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <HomeLeft />
        <HomeMiddle />
        <HomeRight />
      </div>
    </div>
  );
};
export default Home;
