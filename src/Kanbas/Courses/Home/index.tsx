import { FaChartBar, FaCircleNotch, FaFileImport, FaMicrophone } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="home-page">
      <ModuleList pageType="Home"/>
      <div className="home-buttons">
      <button className="btn btn-primary"
        style={{ background: "grey", color: "black", border: "1px", margin: "10px" }}> <FaFileImport className="fs-2 individual-button" />Import Existing Content</button>
            <button className="btn btn-primary"
        style={{ background: "grey", color: "black",  border: "1px", margin: "10px" }}> <FaChartBar className="fs-2 individual-button" /> Import From Commons</button>
            <button className="btn btn-primary"
        style={{ background: "grey", color: "black",  border: "1px", margin: "10px" }}><FaCircleNotch className="fs-2 individual-button" /> Choose Home Page</button>
            <button className="btn btn-primary"
        style={{ background: "grey", color: "black",  border: "1px", margin: "10px" }}><FaChartBar className="fs-2 individual-button" /> View Course Stream</button>
            <button className="btn btn-primary"
        style={{ background: "grey", color: "black",  border: "1px", margin: "10px" }}><FaMicrophone className="fs-2 individual-button" />New Announcement</button>
            </div>
    </div>
  );
}
export default Home;