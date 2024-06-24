# 📚 BookMania-MERN Stack Project

Welcome to **BookMania**, an online bookstore application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to browse, and search books online, providing a seamless and engaging experience.

## Technologies Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.

### Database
- **MongoDB**: A NoSQL database for storing book data and user information.

### Additional Technologies
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Bootstrap**: A CSS framework for responsive design.
- **Bcrypt.js**: For hashing passwords.


## Features
- **User Authentication**: Sign up and login functionality with JWT-based authentication.
- **Browse Books**: View a list of available books with details such as title, author, price, and description.
- **Search Functionality**: Search for books by title or author.
- **Logout Process**: Done with browsing, Logout the page.


## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed or a MongoDB Atlas account.

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/AmanBariar01/BookMania.git
    cd BookMania/Backend
    ```
2. Install backend dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `Backend` directory and add the following environment variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the `Frontend` directory:
    ```bash
    cd ../Frontend
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the frontend application:
    ```bash
    npm run dev
    ```

## Usage
1. Sign up for a new account or log in with existing credentials.
2. Browse the available books, and Logout.
