  
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className= "header">
        
            <nav>
                <a href="/score">Team Bangladesh</a>
                <a href="/score">Live Score</a>
                <a href="/teams">Teams</a>
                <a href="/news"> News</a>
                </nav>
        </div>
    );
};

export default Header;
