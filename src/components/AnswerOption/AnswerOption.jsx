import React, { useState } from 'react';
import './AnswerOption.scss'; // Import the SCSS file

function AnswerOption({ questionType, options, onAnswer, currentAnswer }) {
  const [answer, setAnswer] = useState(currentAnswer || (questionType === "checkbox" ? [] : ""));

  const handleChange = (e) => {
    if (questionType === "radio") {
      setAnswer(e.target.value);
    } else if (questionType === "checkbox") {
      const newAnswer = e.target.checked
        ? [...answer, e.target.value]
        : answer.filter(a => a !== e.target.value);
      setAnswer(newAnswer);
    }
  };

  return (
    <div className="answer">
      {options.map((option, idx) => (
        <label key={idx} className="answer__option">
          <div className={`answer__box ${answer === option || answer.includes(option) ? 'selected' : ''}`}>
            {questionType === "radio" ? (
              <input 
                type="radio" 
                name="answer" 
                value={option} 
                checked={answer === option} 
                onChange={handleChange} 
                className="answer__input"
              />
            ) : (
              <input 
                type="checkbox" 
                value={option} 
                checked={answer.includes(option)} 
                onChange={handleChange} 
                className="answer__input"
              />
            )}
            <span className="answer__text">{option}</span>
            <svg 
              className={`answer__icon ${answer === option || answer.includes(option) ? 'selected' : ''}`} 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.8011 10C22.2578 12.2413 21.9323 14.5714 20.879 16.6018C19.8256 18.6322 18.108 20.2401 16.0126 21.1573C13.9172 22.0746 11.5707 22.2458 9.3644 21.6424C7.15807 21.039 5.22529 19.6974 3.88838 17.8414C2.55146 15.9854 1.89122 13.7272 2.01776 11.4434C2.14431 9.15954 3.04998 6.98809 4.58375 5.29117C6.11752 3.59425 8.18668 2.47443 10.4462 2.11845C12.7056 1.76248 15.0189 2.19186 17.0001 3.335" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11L12 14L22 4" stroke="black" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </label>
      ))}
    </div>
  );
}

export default AnswerOption;
