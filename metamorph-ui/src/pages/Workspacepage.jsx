// import NavBar from "../components/workspacecomponents/navbar";
// import Sidebar from "../components/workspacecomponents/sidebar";
// import Workspacebody from "../components/workspacecomponents/workspacebody";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/workspacecomponents/Sidebar";
import Dashboard from "../components/workspacecomponents/Dashboard";
import "../CSS/workspace.css";

function WorkSpacePage() {

    let navigate = useNavigate();
    useEffect(() => {
        document.title = "Workspace Page";
      
        const checkAuth = async () => {
          const token = await localStorage.getItem("token");
          if (token == null) {
            navigate("/");
          }
        };
        checkAuth();
        const handleStorageChange = () => {
          checkAuth(); 
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };
      }, []);

    return (
        <div className="workspacepage">
            <Sidebar />
            <Dashboard />
        </div>
    );
}
export default WorkSpacePage;