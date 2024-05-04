import React from "react";
import ViewCodeNavBar from "../components/viewcode/ViewCodeNavBar";
import ViewCodeSideUtilityBar from "../components/viewcode/ViewCodeSideUtilityBar";
import "../CSS/code_view/viewcodepagewrapper.css";

const ViewCodePage = () => {
  return (
    <div className="view-code-page-wrapper">
      <ViewCodeNavBar />
      <ViewCodeSideUtilityBar />
    </div>
  );
};

export default ViewCodePage;
