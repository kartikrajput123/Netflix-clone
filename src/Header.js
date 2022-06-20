import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className="header header__black">
            <img
            className="netflix__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="NETFLIX" />
            <div className="header__links">
                <button>Home</button>
                <button>TV Shows</button>
                <button>Movies</button>
                <button>New and Popular</button>
                <button>My List</button>
            </div>
            <a href='/'>
            <img
            className="user__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
            />
            </a>
            
        </div>
    )
}

export default Header;
