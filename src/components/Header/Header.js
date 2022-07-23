import React from 'react';
import {NavLink} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shops'>Shops</NavLink>
            <NavLink to='/about'>About</NavLink>
            {
                user?.displayName? <NavLink onClick={logOut} to='/login'>Log Out</NavLink>
                : 
                <NavLink to='/login'>Login</NavLink>
            }
            <span>{user.displayName}</span>
            <img width='30px' src={user.photoURL} alt="" />
            
        </nav>
    );
};

export default Header;