import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import KanbasMobileNavigation from "./Navigation/Mobile";
import Home from "./Courses/Home";
function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
      <KanbasMobileNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;