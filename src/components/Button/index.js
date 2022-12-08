import React from "react";
import "./button.scss";

const Button = ({title}) => {
    return (
    <button className="button">{ title }</button>
    )
    
}

export default Button