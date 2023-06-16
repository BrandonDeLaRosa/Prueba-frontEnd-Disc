import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({theme}) => {

    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem("token", "")
    }


    return (
        <div className='navBar'>
            <Link className={theme? "linkDk" :'link' }to="/" onClick={() => setModalOn(false)}>Login</Link>
            <Link className={theme? "linkDk" :'link'} to="/hotels" onClick={() => setModalOn(false)}>Hotels</Link>
            <button className={theme? "linkBtnDk" :'linkBtn'} onClick={logOut}>Log Out</button>
            {/* <button onClick={() => setModalOn(true)}>Search a hotel by id</button> */}
        </div>
    );
};

export default Header;