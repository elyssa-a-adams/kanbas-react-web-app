import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import KanbasMobileNavigation from "./Navigation/Mobile";
import { db } from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "dog.JPG"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
      <KanbasMobileNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account/>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Courses/" element={<Navigate to="Courses/DOG101/Home" />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;