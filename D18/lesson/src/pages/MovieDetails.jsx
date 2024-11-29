import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(
                `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
            );
            const data = await response.json();
            setMovie(data);
        };
        fetchMovieDetails();
    }, [id, apiKey]);

    return movie ? (
        <div className="mt-5 text-center">
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <p>
                <strong>Released:</strong> {movie.Released}
            </p>
            <p>
                <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
                <strong>Director:</strong> {movie.Director}
            </p>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default MovieDetails;
