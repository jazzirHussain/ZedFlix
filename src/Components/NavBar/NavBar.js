import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from './Zedflix2.png'
function NavBar(props) {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 280){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div  className={colorChange ? 'navbar nav_chnged' : 'navbar'}>
            <img className='logo' src={logo} alt="Netflix logo"/>
            {props.notHome ? 
                <Link to='/' className='nav-link'>Home</Link>
            : ''}
            
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
        </div>
    )
}

export default NavBar

