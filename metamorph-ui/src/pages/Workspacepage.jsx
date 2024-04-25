// import NavBar from "../components/workspacecomponents/navbar";
// import Sidebar from "../components/workspacecomponents/sidebar";
// import Workspacebody from "../components/workspacecomponents/workspacebody";
import Sidebar from "../components/workspacecomponents/Sidebar";
import Dashboard from "../components/workspacecomponents/Dashboard";
import "../CSS/workspace.css";

function WorkSpacePage() {
    return (
        <div className="workspacepage">
            <Sidebar />
            <Dashboard />
        </div>
    );
}
export default WorkSpacePage;