import { Outlet } from "react-router-dom";
import "./Dashboard.css"

const Dashboard = () => {

    return (
        <div className="flex-grow">
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;