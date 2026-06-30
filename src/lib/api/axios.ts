import axios from "axios";

const BASE_URL = process.env.TMDB_API_URL || "https://api.themoviedb.org/3";


const TOKEN = process.env.TMDB_KEY || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjUyZWY3OGVkZDY2ZTQzNDk4ZTgzYmRmODY5ZmQ2ZiIsIm5iZiI6MTc4MjgyODYxNC4zMDIsInN1YiI6IjZhNDNjZTQ2OWRlMDVjNTNmNWQ4MDMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Ib1yR-_DLp3DRYCZH8fm9u29cpW5aUskOfnl4JRRWA";

const tmdbAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": 'application/json'
    }
});

export default tmdbAPI;