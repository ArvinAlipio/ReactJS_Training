import React from 'react';

const textEnteredValidation = ( props ) => {
    // if ( props.textLength < 5 ) {
    //    return <p>Text too short</p>;
    // } else {
    //    return <p>Text long enough </p>;
    // }
    //better approach

    let validationMessage = 'Text long enough.';

    if (props.textLength <= 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default textEnteredValidation;