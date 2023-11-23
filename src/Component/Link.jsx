import React from "react";
import { Link } from "react-router-dom";
function Links() {
    return (
        <>
            <ul className="contentLinksHome">
                <li><button onClick={()=>{
                    window.location.href="http://localhost:3000/"
                }}>TechBox</button></li>
                <li><Link to="/User">Users</Link></li>
                <li><Link to="/product">Products</Link></li>
            </ul>
        </>
    );
}

export default Links;
