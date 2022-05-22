import React from "react";
import "../../Styles/Components/Button/button.css"

function onClickHandler() {
    console.log('Button clicked. Welcome!')
    window.alert('Welcome to Crank!')
}

function StartBtn() {
    return(
        <a onClick={onClickHandler}>Start Now</a>
    )
}

export default StartBtn