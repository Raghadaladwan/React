import React from 'react';

// Stateless Finctional componenet
// No need of class any more 
const NavBar = ({ total }) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>

        <span className="badge badge-pill badge-secondary">
        {total} 
        {/* No need to add props >> FUNCTION */}
        
        </span>
        </nav> 
    );

};
export default NavBar ;