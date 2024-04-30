// import NavBar from "../components/workspacecomponents/navbar";
// import Sidebar from "../components/workspacecomponents/sidebar";
// import Workspacebody from "../components/workspacecomponents/workspacebody";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/workspacecomponents/sidebar";
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
        // Call checkAuth immediately when the component mounts
        checkAuth();
        // Listen for changes in localStorage
        const handleStorageChange = () => {
          checkAuth(); // Re-run authentication check whenever localStorage changes
        };
        // Add event listener to localStorage
        window.addEventListener("storage", handleStorageChange);
        // Clean up by removing the event listener when the component unmounts
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