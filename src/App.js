import React , {useState} from 'react';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Quiz from './components/quiz';
import questions from './Data/questions.json';
import {Route , Redirect} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [introPage , setIntroPage] = useState(true);
  const [name , setName] = useState('Quizzz');
  const [idx , set_idx] = useState(0);
  const [score , setScore] = useState(0);

  return (
    <div>
      {
        introPage && !window.localStorage.getItem('examDone') ?
        <div>
        <Navbar name={name}/>
        <Intro setName={setName} setIntroPage={setIntroPage}/>
        </div>  :
        <BrowserRouter>
        <div>
          <Navbar name={name}/>
          <Route path={'/' + idx}>
                <Quiz 
                question={questions[idx]} 
                nextQuestion={set_idx}
                setScore={setScore}
                score={score}
                name={name}/>
          </Route>
          <Redirect to={"/" + idx}/>
        </div>
        </BrowserRouter>
        
        

      }
    </div>
  );
}

export default App;
