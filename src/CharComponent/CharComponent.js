import React from "react";

const char = (props) => {
    const containerStyle = {
        display: "inline-block",
        margin: "5px"
    }

    const charStyle = {
        padding: "5px 10px",
        border: "1px solid black",
        display: "inline-block"
    }
    return (
        <div style={containerStyle}>
            <p onClick={props.onClick} style={charStyle}>{props.char}</p>
        </div>
    )
}

export default char;