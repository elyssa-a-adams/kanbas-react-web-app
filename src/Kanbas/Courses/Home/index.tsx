import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="home-page">
      <ModuleList pageType="Home"/>
      <div className="home-buttons">
      <button>Import Existing Content</button>
            <br />
            <button>Import From Commons</button>
            <br />
            <button>Choose Home Page</button>
            <br />
            <button>View Course Stream</button>
            <br />
            <button>New Announcement</button>
            </div>
    </div>
  );
}
export default Home;