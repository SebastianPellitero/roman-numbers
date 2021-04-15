import React, { useState } from 'react';
import romanConverter from "./RomanEngine";

const Viewer = () => {
    const [inputValue, setInputValue] = useState('');
    const [resultValue, setResultValue] = useState(0);

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.valueAsNumber);
    }

    const handleKeyPress = (e) => {
        if (e.charCode < 48 || e.charCode > 57) e.preventDefault();
    }

    const handleClick = () => {
        setResultValue(romanConverter(inputValue));
    }

    return <div>
        <input aria-label='user-input' type='number' pattern="[0-9]" onKeyPress={handleKeyPress} value={inputValue} onChange={handleInput}/>
        <button aria-label='user-button' onClick={handleClick}></button>
        {resultValue ? 
            <div aria-label='user-result'>{resultValue}</div> 
            : 
            <></>
        }
    </div>
};

export default Viewer;