import { FaChartBar, FaCircleNotch, FaFileImport, FaMicrophone } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="home-page">
      <ModuleList pageType="Home"/>
      <div className="home-buttons">
      <button> <FaFileImport className="fs-2 individual-button" />Import Existing Content</button>
            <button><FaChartBar className="fs-2 individual-button" /> Import From Commons</button>
            <button><FaCircleNotch className="fs-2 individual-button" /> Choose Home Page</button>
            <button><FaChartBar className="fs-2 individual-button" /> View Course Stream</button>
            <button><FaMicrophone className="fs-2 individual-button" />New Announcement</button>
            </div>
    </div>
  );
}
export default Home;