import React, { useState } from "react";
import "./index.css";
import { db } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import Breadcrumb from "../../Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
export default function ModuleList({ pageType }: { pageType: string}) {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
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
            className="btn btn-primary"
            style={{ background: "grey", border: "1px", margin: "10px"}} 
          >
            Collapse All
          </button>
          <button className="btn btn-primary"
        style={{ background: "grey", border: "1px", margin: "10px" }} >View Progress</button>
          <button className="btn btn-primary"
        style={{ background: "grey", border: "1px", margin: "10px" }} >Publish All</button>
          <button className="btn btn-primary" style={{ background: "red", color: "white", border: "1px", margin: "10px" }}>
            + Module
          </button>
        </div>
        <ul className="list-group wd-modules">
        <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        className="btn btn-primary"
        style={{ background: "green" }} >
           Add
        </button>
        <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary"
        style={{ background: "grey" }}>
                Update
        </button>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value })) }
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

          {moduleList.filter((module) => module.course === courseId).map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>{module.name}</h3>
                <span className="float-end">
                <button
              onClick={() => dispatch(setModule(module))} className="btn btn-primary"
              style={{ background: "grey" }}>
              Edit
            </button>
                <button
              onClick={() => dispatch(deleteModule(module._id))} className="btn btn-primary"
              style={{ background: "red" }}>
              Delete
            </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              <div>
                {module.description}
                </div>
              {selectedModule._id === module._id && (
                <ul className="list-group" style={{ display: "flex" }}>
                  {module.lessons?.map((lesson: { name: string, description: string }, index: React.Key ) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                      <div>
                {lesson.description}
                </div>
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