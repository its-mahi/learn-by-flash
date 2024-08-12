import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';
import FlashcardModal from './FlashcardModal';
import Loader from './Loader';

const FlashcardList = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    
    // by default loader will be true ---> loader will be shown
    const [loading, setLoading] = useState(true);  

    const backend_uri = process.env.REACT_APP_BACKEND_URI;

    useEffect(() => {
        // fetching flashcard data from the database
        axios.get(`${backend_uri}/api/flashcards`)
            .then(response => {
                setFlashcards(response.data);
                // data fetched successfully ---> set loading to false
                setLoading(false);  
            })
            .catch(error => {
                console.error('Error occurred while fetching data:', error);
                // if error occured ---> stop the loader
                setLoading(false);  
            });
    }, []);

    const handleCardClick = (flashcard) => {
        setSelectedCard(flashcard);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="flashcard-list">
            {/* Show loader while data is being fetched */}
            {loading ? (
                <Loader />  // Display a loader component
            ) : (
                flashcards.map(flashcard => (
                    <div
                        key={flashcard.id}
                        className="flashcard-preview"
                        onClick={() => handleCardClick(flashcard)}
                    >
                        <Flashcard flashcard={flashcard} />
                    </div>
                ))
            )}

            {/* Modal view for selected flashcard */}
            {selectedCard && (
                <FlashcardModal
                    flashcard={selectedCard}
                    onClose={handleCloseModal}
                    flashcards={flashcards}
                />
            )}
        </div>
    );
};

export default FlashcardList;
