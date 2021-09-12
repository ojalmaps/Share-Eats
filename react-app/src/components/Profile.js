import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Avatar } from '@material-ui/core';

function Profile() {
    return (
        <>
            <h2>Profile</h2>
            <Avatar>
                <PersonIcon />
            </Avatar>
            <p>Hello, happy to be here :)</p>
        </>
    );
}

export default Profile;