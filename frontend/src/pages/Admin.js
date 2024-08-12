import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashcardForm from '../components/FlashcardForm';
import Loader from '../components/Loader';
import './Admin.css';

const Admin = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [editingFlashcard, setEditingFlashcard] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const backend_uri = process.env.REACT_APP_BACKEND_URI;

  useEffect(() => {
    // fetching data of all flashcards from database
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get(`${backend_uri}/api/flashcards`);
        setFlashcards(response.data);
        // data fetched successfully ---> set loading to false
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching flashcards:', error);
        // if error occured ---> stop the loader
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, [backend_uri]);

  const handleSave = () => {
    // refresh the list of flashcards -> show loader when refreshing data
    setLoading(true); 
    fetchFlashcards();
  };

  const handleDelete = (id) => {
    setFlashcards(flashcards.filter(f => f.id !== id));
  };

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get(`${backend_uri}/api/flashcards`);
      setFlashcards(response.data);
      // data fetched successfully ---> set loading to false
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching flashcards:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <FlashcardForm
        flashcard={editingFlashcard}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <div className="flashcard-list">
        {loading ? (
          <Loader />
        ) : (
          flashcards.map(flashcard => (
            <div
              key={flashcard.id}
              className="flashcard-preview"
              onClick={() => setEditingFlashcard(flashcard)}
            >
              <div className="flashcard">
                <div className="front">{flashcard.question}</div>
                <div className="back">{flashcard.answer}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
