import { FaChartBar, FaCircleNotch, FaFileImport, FaMicrophone } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="home-page">
      <ModuleList pageType="Home"/>
      <div className="home-buttons">
      <button className="btn btn-primary"
              style={{ background: "buttonface", margin: "10px", color: "black", border: "black" }}> <FaFileImport className="fs-2 individual-button" />Import Existing Content</button>  
<button className="btn btn-primary"
              style={{ background: "buttonface", margin: "10px", color: "black", border: "black" }}><FaChartBar className="fs-2 individual-button" /> Import From Commons</button> 
<button className="btn btn-primary"
              style={{ background: "buttonface", margin: "10px", color: "black", border: "black" }}><FaCircleNotch className="fs-2 individual-button" /> Choose Home Page</button> 
<button className="btn btn-primary"
              style={{ background: "buttonface", margin: "10px", color: "black", border: "black" }}><FaChartBar className="fs-2 individual-button" /> View Course Stream</button> 
<button className="btn btn-primary"
              style={{ background: "buttonface", margin: "10px", color: "black", border: "black" }}><FaMicrophone className="fs-2 individual-button" />New Announcement</button>

            </div>
    </div>
  );
}
export default Home;