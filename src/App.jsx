import "./App.css";
import Body from "./components/Body";
import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div>
      <div className="flex">
        <RightSideBar />
        <Body />

        <LeftSideBar />
      </div>
      <div>
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
}

export default App;
