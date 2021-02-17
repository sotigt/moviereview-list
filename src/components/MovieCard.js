import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

function MovieCard(props){

    const { removeMovie } = useContext(MovieContext)

    return(
        <div className="moviecard">
            <p><span>Movie title: </span>{props.movie.title}</p>
            <p><span>Movie review: </span>{props.movie.review}</p>
            <button onClick={() => removeMovie(props.movie)}>Remove review</button>
        </div>
    )
}

export default MovieCard;