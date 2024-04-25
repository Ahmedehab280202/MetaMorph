import React from "react";
import HomeNavBar from "./components/homenavbar";
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import WorkSpacePage from "./pages/Workspacepage";
// import LoginForm from "./components/logincomponents/loginform";
import LoginModal from "./components/LoginModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
                </Routes>
            </Router>
            {/* <WorkSpacePage /> */}
        </div>
    );
}

export default App;
