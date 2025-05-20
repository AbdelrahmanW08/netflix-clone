# Netflix Clone

A Netflix clone built with React and Vite.

## Features

*   Browse movies and TV shows
*   User authentication (Sign-up / Login)
*   Search functionality
*   Responsive design

## Tech Stack

*   Frontend: React, Vite, Tailwind CSS, JavaScript
*   Backend: Node.js, Express.js
*   Database: MongoDB (Not explicitly used in the provided file structure, but a common choice for similar projects)

## How To Run

1.  Clone the repository:
    `git clone <repository-url>`
2.  Navigate to the project directory:
    `cd netflix-clone`
3.  Install dependencies for both frontend and backend:
    `cd frontend && npm install`
    `cd ../backend && npm install`
4.  Set up environment variables:
    *   Create a `.env` file in the `backend` directory.
    *   Add the following variables:
        `MONGODB_URI=your_mongodb_connection_string` (If using MongoDB)
        `JWT_SECRET=your_jwt_secret`
5.  Run the backend server:
    `cd backend && npm start`
6.  Run the frontend development server:
    `cd frontend && npm run dev`
7.  Open your browser and navigate to `http://localhost:5173` (or the port Vite uses).
