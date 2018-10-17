import React from 'react';

const arrayCharList = ( props ) => {
    const charComponentStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <div style={charComponentStyle} onClick={props.clicked}>
            <p>{props.charEntered}</p>
        </div>
    );
}

export default arrayCharList;