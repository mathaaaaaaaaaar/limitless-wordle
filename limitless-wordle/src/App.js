import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import WordAttempt from './components/WordAttempt';

function App() {

  const [activeAttempt, setActiveAttempt] = useState(1);
  const [canSubmit, setCanSubmit] = useState(false);
  const [inputValues, setInputValues] = useState(Array(6).fill().map(() => Array(5).fill('')));

  const handleSubmit = (word) => {
    setActiveAttempt(activeAttempt+1);
    console.log(word);
  };

  const checkCanSubmit = (value) => {
    setCanSubmit(value.length === 5);
  };

  const handleSetInputValues = (index, newValues) => {
    setInputValues(prev => prev.map((arr, i) => i === index ? newValues : arr));
  };

  return (
    <div className="App">
      <Header />
      <div className="wordColumn">
        <WordAttempt className="attemptOne" active={activeAttempt === 1} inputValues={inputValues[0]} setInputValues={(newValues) => handleSetInputValues(0, newValues)} onInputChange={checkCanSubmit}/>
      </div>
      <div className="wordColumn">
        <WordAttempt className="attemptTwo" active={activeAttempt === 2} inputValues={inputValues[1]} setInputValues={(newValues) => handleSetInputValues(1, newValues)} onInputChange={checkCanSubmit}/>
      </div>
      <div className="wordColumn">
        <WordAttempt className="attemptThree" active={activeAttempt === 3} inputValues={inputValues[2]} setInputValues={(newValues) => handleSetInputValues(2, newValues)} onInputChange={checkCanSubmit}/>
      </div>
      <div className="wordColumn">
        <WordAttempt className="attemptFour" active={activeAttempt === 4} inputValues={inputValues[3]} setInputValues={(newValues) => handleSetInputValues(3, newValues)} onInputChange={checkCanSubmit}/>
      </div>
      <div className="wordColumn">
        <WordAttempt className="attemptFive" active={activeAttempt === 5} inputValues={inputValues[4]} setInputValues={(newValues) => handleSetInputValues(4, newValues)} onInputChange={checkCanSubmit}/>
      </div>
      <div className="wordColumn">
        <WordAttempt className="attemptSix" active={activeAttempt === 6} inputValues={inputValues[5]} setInputValues={(newValues) => handleSetInputValues(5, newValues)} onInputChange={checkCanSubmit}/>
      </div>
      <button className='submitBtn' type="submit" disabled={!canSubmit} onClick={() => handleSubmit(inputValues[activeAttempt-1])}>Submit</button>
    </div>
  );
}

export default App;
