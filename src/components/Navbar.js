import { NavLink } from 'react-router-dom';


function Navbar() {
    return(
        <div className="navbar">
            <h2>Movie Review</h2>
            <div className="navlinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default Navbar;