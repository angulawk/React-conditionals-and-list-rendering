import React from "react";

const validation = (props) => {
    let message = "Text is too short";

    if (props.length >= 10) {
        message = "This is too long";
    }

    return (
        <div length={props.textLength}>
            <p>{message}</p>
        </div>
    )
};

export default validation;