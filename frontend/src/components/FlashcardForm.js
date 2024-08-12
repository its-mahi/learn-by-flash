import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlashcardForm.css'

const FlashcardForm = ({ flashcard, onSave, onDelete }) => {
    const [question, setQuestion] = useState(flashcard?.question || '');
    const [answer, setAnswer] = useState(flashcard?.answer || '');
    const [id, setId] = useState(flashcard?.id || null);

    // fetching backend url from environment file
    const backend_uri = process.env.REACT_APP_BACKEND_URI;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {

            // updating flashcard details on backend | database side
            axios.put(`${backend_uri}/api/flashcards/${id}`, { question, answer })
                .then(() => {
                    setQuestion('');
                    setAnswer('');
                    setId(null);
                    if (onSave) onSave(); 
                })
                .catch(error => console.error('Error updating flashcard:', error));
        } 
        else {
            // creating new flashcard
            axios.post(`${backend_uri}/api/flashcards`, { question, answer })
                .then(() => {
                    setQuestion('');
                    setAnswer('');
                    if (onSave) onSave();
                })
                .catch(error => console.error('Error adding flashcard:', error));
        }
    };

    const handleDelete = () => {
            if (id && onDelete) {
                // deleting flashcard specified by id
                axios.delete(`${backend_uri}/api/flashcards/${id}`)
                    .then(() => {
                        console.log(id, " ", onDelete);
                        if (onDelete) {
                            onDelete(id); 
                        }
                    })
                    .catch(error => console.error('Error deleting flashcard:', error));
            }
    };

    useEffect(() => {
        if (flashcard) {
            setQuestion(flashcard.question);
            setAnswer(flashcard.answer);
            setId(flashcard.id);
        }
    }, [flashcard]);

    return (
        <>    
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Question"
                required
            />
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Answer"
                required
            />

            {/* showing different text in various mode (Add | Update | Delete) */}
            
            <button className='add-button' type="submit">{id ? 'Update' : 'Add'} Flashcard</button>
            {id && <button className='add-button' type="button" onClick={handleDelete}>Delete</button>}
            </form>
        </>
    );
};

export default FlashcardForm;
