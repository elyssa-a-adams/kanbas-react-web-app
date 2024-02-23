import React from "react";
import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";
import Assignments from "./Assignments";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="page">
      <CourseNavigation />
        <div className="overflow-y-scroll" style={{flex: 1}}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>}/>
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
    </div>
);}

export default Courses;