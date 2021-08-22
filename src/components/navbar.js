import React from 'react';
import '../componentStyles/navbar.css';


const navbar = (props) => {
    return (
        <div className="navbar">
            <h1>{props.name === "Quizzz" ?
                "Quizzz":
                `Hey ${props.name}`
                 }
            </h1>
        </div>
    )
}

export default navbar;
