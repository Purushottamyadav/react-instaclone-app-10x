import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='containerNav'>
        <div className='logo'>
        <img src="./images/headerInstagram.png" alt="" width={"200px"}/>
        </div>
        <div className='camera'>
            <Link to="/createpost">
        <img src="./images/camera.png" alt="" width={"100px"} height={"50px"} float={"right"}/>
        </Link>
        </div>

    </div>
  )
}

export default NavBar