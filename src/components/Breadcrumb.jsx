import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <button>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <p>Food and Drinks</p>
      <FontAwesomeIcon icon={faChevronRight} />
      <p className="active">Burgers</p>
    </div>
  );
};

export default Breadcrumb;
