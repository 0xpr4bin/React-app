import React, {useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar()
{
    const [click,setClick] = useState(false);
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
            <nav className='navbar'>
                <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            TokenSystem <i className='fab fa-typo3'/>
                        </Link>
                    <div className='menu-icon' onClick={handleclick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                    Home                     
                                </Link>
                        </li>
                        <li className='nav-item'>
                                <Link to='/Contacts' className='nav-links' onClick={closeMobileMenu}>
                                    Contacts                    
                                </Link>
                        </li>
                        <li className='nav-item'>
                                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                                    Services                     
                                </Link>
                        </li>
                        <li className='nav-item'>
                                <Link to='/Signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Signup                     
                                </Link>
                        </li>
                    </ul> 
                    <button>Login</button>
                </div>
            </nav>
        </>
    );
}
export default Navbar;