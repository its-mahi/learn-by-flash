# ✨ Flashcard Learning Tool

Welcome to the **Flashcard Learning Tool**! This is a modern, interactive, and dynamic web application designed to help users learn and memorize information through flashcards. Built with React, Node.js, Express, and MySQL, this tool offers a sleek user interface and robust backend support.

## 🎯 Features

### 🔍 **View Flashcards**
- **Explore All Flashcards**: Browse through a collection of flashcards on the home page.
- **Flip to Reveal Answers**: Click on any flashcard to open it in a modal and flip it to see the answer.
- **Navigation**: Easily move between flashcards using 'Next' and 'Previous' buttons.

### 🛠️ **Admin Dashboard**
- **Add Flashcards**: Create new flashcards with questions and answers using the intuitive form.
- **Edit Flashcards**: Modify existing flashcards by selecting them from the list and updating the content.
- **Delete Flashcards**: Remove flashcards that are no longer needed with a single click.


## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/its-mahi/flashcard-learning-tool.git
   ```
2. **Install dependencies**:

   - Navigate to the frontend:
     ```bash
     cd flashcard-learning-tool/frontend
     npm install
     ```
   - Navigate to the backend:
     ```bash
     cd ../backend
     npm install
     ```

3. **Set up your environment variables**:

   - **Frontend**:
     - Create a `.env` file in the `frontend` directory.
     - Add your backend URI:
       ```bash
       REACT_APP_BACKEND_URI = <your_backend_url>
       ```

   - **Backend**:
     - Create a `.env` file in the `backend` directory with the following content:
       ```bash
       HOSTNAME = <your_database_host_name>
       USERNAME = <your_database_username>
       PASSWORD = <your_database_password>
       DATABASE = <your_database_name>
       PORT = <port_for_backend>
       ```

4. **Start the development server**:

   - Start the backend server:
     ```bash
     npm start
     ```
   - Start the frontend server (in another terminal):
     ```bash
     cd ../frontend
     npm start
     ```


## 💻 Tech Stack

- **Frontend**: React, CSS, HTML
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Environment Management**: `.env` for configuration


---

Enjoy using the Flashcard Learning Tool! Happy Learning! 🎉

--- 