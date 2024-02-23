import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import Breadcrumb from "../../Breadcrumb";
export default function ModuleList({ pageType }: { pageType: string}) {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const courseDefault = courseId || "Course";
  return (
    <>
      <div className="modules-column">
      <Breadcrumb courseName={courseDefault} pageType={pageType} />
        <div className="button-group">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseWeek1 multiCollapseWeek2"
          >
            Collapse All
          </button>
          <button>View Progress</button>
          <button>Publish All</button>
          <button style={{ background: "red", color: "white" }}>
            + Module
          </button>
        </div>
        <ul className="list-group wd-modules">
          {modulesList.map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div style={{ display: "flex" }}>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group" style={{ display: "flex" }}>
                  {module.lessons?.map((lesson, index) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
