import React from 'react';
import * as  AiIcons from 'react-icons/ai'; 
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

export const NavbarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-item'
    },
    {
        title:'Contacts',
        path:'/contacts',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-item'
    },
    {
        title:'Services',
        path:'/services',
        icon:<FaIcons.FaCartPlus/>,
        cName:'nav-item'
    },
    {
        title:'Login',
        path:'/login',
        icon:<FaIcons.Fa500Px/>,
        cName:'nav-item'
    },
]