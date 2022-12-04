import React, {useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar()
{
    const [click,setClick] = useState(false)
    const handleclick = () => setClick(!click);
   
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Token System <i className='fab fa-typo3'/>
                    </Link>
                <div className='menu-icon' onClick={handleclick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>

                </div>

                </div>
            </nav>

        </>
    );
}
export default Navbar;