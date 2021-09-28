import React from 'react';
import logo from '../../assests/logo.png';
import './styles.scss';

const Header = props => {
    return ( 
        <div className= "header">
            <div className= "wrap">
                <div className="logo">
               
                    <img src ={logo}  style = {{ height :"50px", width : " 50px"}} alt= "logo"></img>
                    
                </div>
            </div>
   
        </div>
     );
}

export default Header;
