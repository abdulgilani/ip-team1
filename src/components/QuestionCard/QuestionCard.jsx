import React from 'react';
import AnswerOption from '../AnswerOption/AnswerOption';

function QuestionCard({ question, onAnswer, currentAnswer }) {
  return (
    <div className="question">
      <h2 className='question__title'>{question.question}</h2>
      <AnswerOption 
        questionType={question.type}
        options={question.options}
        onAnswer={onAnswer}
        currentAnswer={currentAnswer}
      />
      <div className='question__button-holder'>
      <button className='question__button' onClick={() => onAnswer(currentAnswer)}>Next</button>
      </div>
    </div>
  );
}

export default QuestionCard;