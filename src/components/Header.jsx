import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [modalOn, setModalOn] = useState(false)
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem("token", "")
    }


    return (
        <div className='navBar'>
            <Link className='link' to="/" onClick={() => setModalOn(false)}>Login</Link>
            <Link className='link' to="/hotels" onClick={() => setModalOn(false)}>Hotels</Link>
            <button className='linkBtn' onClick={logOut}>Log Out</button>
            {/* <button onClick={() => setModalOn(true)}>Search a hotel by id</button> */}
        </div>
    );
};

export default Header;