import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { db } from "../../Database";
import "./index.css";
import Breadcrumb from "../../Breadcrumb";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId);
    const courseDefault = courseId || "Course";
  return (
    <>
    <div className="assignment-list">
    <Breadcrumb courseName={courseDefault} pageType="Assignments" />
      <div className="button-group">
      <button>+ Group</button>
      <button>+ Assignment</button>
      <select>
        <option>Edit Assignment Dates</option>
        <option>Edit Final</option>
      </select>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
      </div>
    </>
);}
export default Assignments;