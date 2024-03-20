import React, { useState } from "react";
import "./index.css";
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
  const courseDefault = courseId || "Course";
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

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
        style={{ background: "grey", border: "1px", margin: "10px" }}
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
          <div className="edit-modules">
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
        />
        </div>
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-primary"
        style={{ background: "green", border: "1px", margin: "10px" }}>
           Add
        </button>
        <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary"
        style={{ background: "grey", border: "1px", margin: "10px" }}>
                Update
        </button>
      </li>
          {moduleList.filter((module) => module.course == courseId).map((module: { _id: string; name: string; description: string; course: string; lessons: { _id: string; name: string; description: string; module: string; }[]; }, index: React.Key) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>{module.name}</h2>
                <span className="float-end">
                <button
              onClick={() => dispatch(setModule(module))}
              className="btn btn-primary"
              style={{ background: "grey", border: "1px", margin: "10px" }} >
              Edit
            </button>
                <button
              onClick={() => dispatch(deleteModule(module._id))}
              className="btn btn-primary"
              style={{ background: "red", border: "1px", margin: "10px" }} >
              Delete
            </button>
            
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {module.description}
              {selectedModule._id === module._id && (
                <ul className="list-group" style={{ display: "flex" }}>
                  {module.lessons?.map((lesson: { name: string }, index: React.Key | null | undefined) => (
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