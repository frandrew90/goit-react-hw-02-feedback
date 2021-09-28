import React from 'react';

const FeedbackOptions = ({ addFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <button type="button" name={option} onClick={addFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
