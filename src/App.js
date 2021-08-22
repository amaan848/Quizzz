import React , {useState , useEffect}from 'react';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Quiz from './components/quiz';
import questions from './Data/questions.json';

function App() {
  const [introPage , setIntroPage] = useState(true);
  const [name , setName] = useState('Quizzz')
  return (
    <div>
      {
        introPage ?
        <div>
        <Navbar name={name}/>
        <Intro setName={setName} setIntroPage={setIntroPage}/>
        </div>  :
        <div>
          <Navbar name={name}/>
          {
            questions.map((details) => {
              <Quiz details={details}/>
            })
          }
        </div>

      }
    </div>
  );
}

export default App;
