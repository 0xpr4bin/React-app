import React, {useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { NavbarData } from './data/NavbarData';
import { IconContext } from 'react-icons';

function Navbar()
{
    const [click,setClick] = useState(true);
    const [button, setButton] = useState(true);

    const handleclick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
   
    const showButton = () => {
        if( window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize',showButton)
    return(
        <>
            <IconContext.Provider value={{color:'grey'}}>
            <nav className='navbar'>
                <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Online Ticket Booking System <i className='fab fa-typo3'/>
                        </Link>
                    <div className='menu-icon' onClick={handleclick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {NavbarData.map((item,index)=>{
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        
                  </ul> 
                </div>
            </nav>
            </IconContext.Provider>
        </>
    );
}
export default Navbar;