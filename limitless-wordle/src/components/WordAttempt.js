import React, { useRef } from 'react';

import WordInput from './WordInput';

const WordAttempt = ({className, active, inputValues, setInputValues, onInputChange}) => {

    const inputRefs = useRef([]);

    const handleChange = (index) => (event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
        onInputChange(newInputValues);
        if (inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index) => (event) => {
        if (event.key === 'Backspace' && event.target.value === '' && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className={className}>
            <WordInput className="characterOne" ref={ref => inputRefs.current[0] = ref} active={active} value={inputValues[0]} onChange={handleChange(0)} onKeyDown={handleKeyDown(0)} />
            <WordInput className="characterTwo" ref={ref => inputRefs.current[1] = ref} active={active} value={inputValues[1]} onChange={handleChange(1)} onKeyDown={handleKeyDown(1)} />
            <WordInput className="characterThree" ref={ref => inputRefs.current[2] = ref} active={active} value={inputValues[2]} onChange={handleChange(2)} onKeyDown={handleKeyDown(2)} />
            <WordInput className="characterFour" ref={ref => inputRefs.current[3] = ref} active={active} value={inputValues[3]} onChange={handleChange(3)} onKeyDown={handleKeyDown(3)} />
            <WordInput className="characterFive" ref={ref => inputRefs.current[4] = ref} active={active} value={inputValues[4]} onChange={handleChange(4)} onKeyDown={handleKeyDown(4)} />
        </div>
    );
};

export default WordAttempt;
