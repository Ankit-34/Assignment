import React from "react";
import '../style/NavBar.css';
// import '../style/bookNow.css';

const NavBar = () => {
        return (
           <div className="nav">
                <ul>
                    <li className="li1">Home</li>
                    <li className="li2">Our Services</li>
                    <li className="li4">Contact Us</li>
                    <li className="li5">Pay Now</li>
                </ul>
           </div>
    );
}

export default NavBar;