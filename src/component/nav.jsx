import React from 'react'
import { Link } from "react-router-dom";

function nav() {
  return (
 <div className="nav-cont">
                <nav> <li className="logo"><img src="" alt="logo" /></li>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/game">Game</Link></li>
                        <li> <Link to="/calculator">Project</Link></li>
                        <li><Link to="/api">Api</Link></li>
                    </ul>
                </nav>
                </div>  )
}

export default nav