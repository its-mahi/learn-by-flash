CREATE DATABASE flashcards;
USE flashcards;

CREATE TABLE flashcards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL,
  answer VARCHAR(255) NOT NULL
);

SELECT * FROM flashcards