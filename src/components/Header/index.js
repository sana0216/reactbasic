import React from 'react';
import logo from '../../assests/logo.png';
import './styles.scss';
import {Link }from "react-router-dom";
const Header = props => {
    return ( 
        <div className= "header">
            <div className= "wrap">
                <div className="logo">
                      <Link to="/">
                    <img src ={logo}  style = {{ height :"50px", width : " 50px"}} alt= "logo"></img>
                    </Link>
                </div>
            </div>
            <div className ="callToAction">
              <ul>
                 <li>
               <Link to="/registration">
                  Register
             </Link>
             </li>
             <li>
               <Link to ="/about">
                  About
               </Link>
               </li>
             </ul>
             </div>
        </div>
     );
}

export default Header;
