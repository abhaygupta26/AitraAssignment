import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Trending from "./Trending";
import Group from "./Group";
import Notifications from "./Notifications";
import Profile from "./Profile";

function App() {
  return (
    <div style={{ backgroundColor: "#F4F6F6" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trending" element={<Trending />} />
        <Route exact path="/group" element={<Group />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
