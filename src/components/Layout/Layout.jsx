import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Layout;