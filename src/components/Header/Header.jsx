import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-5 m-10 bg-gray-300 p-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/contact'>Contect</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    );
};

export default Header;