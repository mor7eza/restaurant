import React from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";

const Category = () => {
  return (
    <div className="category-page">
      <div className="container">
        <Sidebar />
        <div className="main">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
};

export default Category;
