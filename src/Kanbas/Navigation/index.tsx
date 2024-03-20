import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaTv, FaClock, FaArrowCircleRight, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
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
    <head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <div>
    <ul className="wd-kanbas-navigation d-none d-sm-block">
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
export default KanbasNavigation;