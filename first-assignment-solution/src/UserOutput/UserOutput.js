import React from 'react';

import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>This is a paragraph inside the UserOutput component.</p>
        </div>
    );
} 

export default userOutput;

