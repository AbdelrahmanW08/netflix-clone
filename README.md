# Netflix Clone 🎬

A Netflix clone built with React and Vite. For learning purposes. 👀

## Features ✨

*   Browse movies and TV shows
*   User authentication (Sign-up / Login)
*   Search functionality
*   Responsive design

## Tech Stack 💻

*   Frontend: React, Vite, Tailwind CSS, JavaScript
*   Backend: Node.js, Express.js
*   Database: MongoDB (Not explicitly used in the provided file structure, but a common choice for similar projects)

## Getting Started 🚀

1.  **Clone the repo**
    ```bash
    git clone https://github.com/your-username/movie-tv-tracker.git
    cd movie-tv-tracker
    ```
2.  **Configure the environment variables**

    Create a `.env` file in the `backend` directory with the following variables:

    ```.env
    MONGODB_URI=your_mongodb_connection_string
    TMDB_API_KEY=your_tmdb_api_key
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

    *   Replace `your_mongodb_connection_string` with your MongoDB connection string.
    *   Replace `your_tmdb_api_key` with your TMDB API key.
    *   Replace `your_jwt_secret` with a secure secret key for JWT.
    *   The `PORT` variable specifies the port the backend server will run on.
3.  **Build the project**
    ```bash
    npm run build
    ```
4.  **Run the app**
    ```bash
    npm run start
    ```

Open your browser and navigate to the appropriate URL.
