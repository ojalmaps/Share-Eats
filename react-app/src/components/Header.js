import React from 'react';
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function Header({ isAuthenticated }) {
    return (
        <>
            <h2>Food App</h2>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            
        </>
    );
}

export default Header;