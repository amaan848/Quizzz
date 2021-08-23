import React , {useState} from 'react';
import '../componentStyles/quiz.css';
import Outro from './outro';


const QuestionArray = [1,2,3,4,5,6,7,8,9,10];
const Quiz = (props) => {
    const [selected_idx , setSelected_idx] = useState();
 
    function onNext(){   
        if(selected_idx === undefined){  
            props.nextQuestion(props.question.idx + 1);            
        } 
        else if(props.question.correct_idx === selected_idx){

            props.setScore(props.score + 5)
            props.nextQuestion(props.question.idx + 1);
        }
        else{
            props.setScore(props.score - 1)
            props.nextQuestion(props.question.idx + 1);
 
        }
        console.log(selected_idx , props.question.correct_idx);         
    }

    function examOverNext(){
        if(selected_idx === props.question.correct_idx){
             props.setScore(props.score + 5)
        }
        else{
             props.setScore(props.score - 1)
        }
        window.localStorage.setItem('examDone' , true);
    }
    return (
         
        window.localStorage.getItem('examDone') ?
        <Outro name={props.name} score={props.score}/>:
        <div>  
             
            <div className="questionBar">  
                {   
                    QuestionArray.map(quesNo => {
                        let currQues = props.question.idx === quesNo - 1;
                        let class_ = ["quesList"].concat(currQues ? "currQues" : "").join(' ')
                        return <span className={class_} key={quesNo}> {quesNo}</span>
                    })
                }
            </div>
        
            <div className="question" onChange={(event)=>setSelected_idx(event.target.value)}>  
                            <div>Current Score : {props.score}</div>            
                <p>{props.question.idx + 1}. {props.question.question}</p><br/>
                <input type="radio" id="a" value="a" name="options"/> {props.question.a}<br/>
                <input type="radio" id="b" value="b" name="options"/> {props.question.b}<br/>
                <input type="radio" id="c" value="c" name="options"/> {props.question.c}<br/>
                <input type="radio" id="d" value="d" name="options"/> {props.question.d}<br/>
                <button className="nextButton" onClick={props.question.idx === 9 ? examOverNext : onNext}>Next</button>      
            </div>
            
        </div>
             
            
            
    )
}

export default Quiz;
