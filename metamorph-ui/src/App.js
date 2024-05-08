import React from "react";
import HomeNavBar from "./components/homenavbar";
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import WorkSpacePage from "./pages/Workspacepage";
import { useState, createContext } from "react";
import AddProjectPage from "./pages/Addprojectpage";
// import LoginForm from "./components/logincomponents/loginform";
import LoginModal from "./components/LoginModal";
import CsvUploaderDemo from "./components/workspacecomponents/CsvUploaderDemo";
import FigmaUploaderDemo from "./components/workspacecomponents/FigmaUploaderDemo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewCodePage from "./pages/ViewCodePage";

export const AppContext = createContext();

function App() {
    const [projectNameContext, setProjectNameContext] = useState("");
    return (
        <div className="App">
            <AppContext.Provider value={{ projectNameContext, setProjectNameContext }}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/workspace" element={<WorkSpacePage />} />
                        <Route path="/codeview" element={<ViewCodePage />} />
                        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;
