import React from 'react';
import {Link} from 'react-router-dom'

//Navarbar for top of webpage
const Navbar =()=>{
    return(
         <nav className="site-nav" id="blcolor">
             <div className="site-nav-left">
                 <a className="site-nav-logo font-text">Ur-Ben-Coding</a>
                 <ul className ="nav">
                     <li className="nav li"><Link to="/about">About</Link></li>
                     <li><Link to="/home">Blog Post</Link></li>
                     <li><Link to="/projects">Projects</Link></li>
                 </ul>
             </div>
             <div className="site-nav-right">
                 <a className ="social-links" href="https://twitter.com/UrbensonL"><i class="fab fa-twitter"></i></a>
                 <a className = "social-links" href="https://github.com/ulaurent"><i class="fab fa-github-square"></i></a>
                </div>
         </nav>
    )
}
export default Navbar 