import React from "react";
import HomeNavBar from "./components/homenavbar";
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import WorkSpacePage from "./pages/Workspacepage";
import AddProjectPage from "./pages/Addprojectpage";
// import LoginForm from "./components/logincomponents/loginform";
import LoginModal from "./components/LoginModal";
import CsvUploaderDemo from "./components/workspacecomponents/CsvUploaderDemo";
import FigmaUploaderDemo from "./components/workspacecomponents/FigmaUploaderDemo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewCodePage from "./pages/ViewCodePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/workspace" element={<WorkSpacePage />} />
                    <Route path="/codeview" element={<ViewCodePage />}/>
                    <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
                </Routes>
            </Router>
            {/* <WorkSpacePage />  */}
            {/* <CsvUploaderDemo /> */}
            {/* <FigmaUploaderDemo /> */}
        </div>
    );
}

export default App;
