import React , {useState} from 'react';
import '../componentStyles/intro.css';

const Intro = (props) => {
    const [nm , setnm] = useState('')
    const setInputName = () => {
        props.setName(nm);
        props.setIntroPage(false)
    }
    return (
        <div className="intro">
            <input type="text" placeholder="What's your name" onChange={(event) => setnm(event.target.value)}/>
            <p>ARE YOU UP FOR A QUIZ?</p>
            <button type="submit" onClick={setInputName}>LET'S GO!</button>
        </div>
    )
}

export default Intro;
