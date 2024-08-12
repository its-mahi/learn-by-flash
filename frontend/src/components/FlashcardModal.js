import React, { useState } from 'react';
import './FlashcardModal.css';
import Flashcard from './Flashcard';

const FlashcardModal = ({ flashcard, onClose, flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(flashcards.indexOf(flashcard));

    // navigating next card (next button)
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };
    
    // navigating previous card (previous button)
    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                
                <Flashcard flashcard={flashcards[currentIndex]} modalMode={true} />
                
                <button className="modal-nav" onClick={prevCard}>Previous</button>
                <button className="modal-nav" onClick={nextCard}>Next</button>
            </div>
        </div>
    );
};

export default FlashcardModal;
