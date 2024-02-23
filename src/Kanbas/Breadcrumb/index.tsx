import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ courseName, pageType }: { courseName: string, pageType: string}) {
    return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to={`/Kanbas/Courses/${courseName}/Home`}>{courseName}</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {pageType}
      </li>
    </ol>
  </nav>
    );
};