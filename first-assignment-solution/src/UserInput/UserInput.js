import React from "react";

const userInput = ( props ) => {
    const inputStyle = {
        border: '2px solid blue'
    };

    return <input 
            type="text" 
            onChange={props.change}
            style={inputStyle}
            value={props.currentName} />
}

export default userInput;
