import React from "react";
import ViewCodeNavBar from "../components/viewcode/ViewCodeNavBar";
import ViewCodeComponent from "../components/viewcode/ViewCodeComponent";
import ViewCodeSideUtilityBar from "../components/viewcode/ViewCodeSideUtilityBar";
import CodeEditor from "../components/viewcode/CodeEditor";
import "../CSS/code_view/viewcodepagewrapper.css";

const ViewCodePage = () => {
  return (
    <div className="view-code-page-wrapper">
      <ViewCodeNavBar />
      {/* <div className="code-view-body"> */}
        <ViewCodeSideUtilityBar />
        {/* <ViewCodeComponent /> */}
        {/* <div className="code-inspection"> */}
          {/* <CodeEditor /> */}
          {/* <ViewCodeComponent /> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default ViewCodePage;
