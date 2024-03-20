import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Navigation/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaTv, FaClock, FaArrowCircleRight, FaQuestionCircle, FaBars } from "react-icons/fa";
function KanbasMobileNavigation() {
  const [visible, setVisible] = useState(false);
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",   icon: <FaInbox className="fs-2" />  },
    { label: "History",   icon: <FaClock className="fs-2" />  },
    { label: "Studio",   icon: <FaTv className="fs-2" />  },
    { label: "Commons",   icon: <FaArrowCircleRight className="fs-2" />  },
    { label: "Help",   icon: <FaQuestionCircle className="fs-2" />  },
  ];
  const { pathname } = useLocation();
  return (
    <div>
    <div>
    </div>
    <div className="d-sm-none" style={{ backgroundColor: "black", display: "flex", justifyContent: "space-between" }}>
      <button onClick={() => {setVisible(!visible)}} data-bs-toggle="collapse" data-bs-target="#multiCollapseNavBar" aria-expanded="false" aria-controls="multiCollapseNavBar" style={{color: "white", paddingBlock: 10, paddingTop: 14, background: "black"}}><FaBars className="fs-2" /></button>
        <div><h3 style={{color: "white"}}>Dashboard</h3></div>
       <h3></h3>
    </div>
    <div className="d-sm-none" style={{display: visible ? 'block' : 'none' }}>
        <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}
export default KanbasMobileNavigation;