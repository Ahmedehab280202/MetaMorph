import NavBar from "../components/workspacecomponents/navbar";
import Sidebar from "../components/workspacecomponents/sidebar";
import Workspacebody from "../components/workspacecomponents/workspacebody";
import "../CSS/workspace.css";

function WorkSpacePage() {
    return (
        <div className="">
            <NavBar />
            <Sidebar />
            <Workspacebody />
        </div>
    );
}
export default WorkSpacePage;