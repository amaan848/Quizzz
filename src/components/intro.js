import React from 'react';
import '../componentStyles/intro.css';

function intro() {
    return (
        <div className="intro">
            <input type="text" placeholder="What's your name"/>
            <p>ARE YOU UP FOR A QUIZ?</p>
            <button type="submit">LET'S GO!</button>
        </div>
    )
}

export default intro;
