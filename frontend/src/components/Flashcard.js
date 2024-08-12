import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard, modalMode }) => {
  const [flipped, setFlipped] = useState(false);

  // modal mode ---> on click => flip the side (question <--> answer)
  const handleClick = () => {
    if (modalMode) {
      setFlipped(!flipped);
    }
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">{flashcard.question}</div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
};

export default Flashcard;
