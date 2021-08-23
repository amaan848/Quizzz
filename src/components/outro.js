import React from 'react'


const Outro = (props) => {
    const setNewExam = () => {
        window.localStorage.clear();
    }
    return (
        <div style={{textAlign: "center" , border: "2px solid white" , padding: "2%" , marginTop: "20%" , width: "60%" , marginLeft: "20%"}}>
            <h2>{props.name} , you have got {props.score} marks!!!</h2>
            <div style={{marginTop: "2%"}}><button onClick={setNewExam}><a href="/" style={{textDecoration: "none"}}>Try Again</a></button></div>
        </div>
    )
}

export default Outro;
