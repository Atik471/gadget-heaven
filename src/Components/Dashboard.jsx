import { Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="flex-grow">
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;