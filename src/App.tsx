import { useState, useEffect } from 'react';
import classes from "./App.module.css";
const App = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(0)  ;
  const generateNewProblem = () => {
    const newNum1 = Math.floor(Math.random() * 7) + 1;
    const newNum2 = Math.floor(Math.random() * 12) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer('');
    setCorrectAnswer(null);
  };

  const checkAnswer = () => {
    const answer = num1 * num2;
    if (parseInt(userAnswer, 10) === answer) {
      setCorrectAnswer('Correct!');
      setScore(prev => prev + 1);
    } else {
      setCorrectAnswer('Try Again');
    }
    setQuestions(prev => prev + 1);
  };

  useEffect(() => {
    generateNewProblem();
  }, []);

  return (
    <div className={classes.Screen}>
    <div className={classes.App}>
      <h1>Multiplication Practice</h1>
      <div>
        <p>
          {num1} x {num2} ={' '}
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={checkAnswer}>Check</button>
          <button onClick={generateNewProblem}>New Problem</button>
        </p>
        <p>{correctAnswer}</p>
        <p>number of questions: {questions}</p>
        <p>correct answers: {score}</p>
        <p>wrong answers: {questions - score}</p>
      </div>
    </div>
    </div>
  );
}

export default App;