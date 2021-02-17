import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
// import MovieCard from './MovieCard'

function ReviewList(){

    const { moviereviews } = useContext(MovieContext);

    return(
        <div className="moviewrapper">
            <h2>Reviews</h2>

            {moviereviews.map((movie, i) => (
                <p>A movie</p>
            ))}
            {/* <h2>Reviews</h2>
            {moviereviews.map((movie, i) => (
                <MovieCard key={i} movie={movie}/>
            ))} */}
        </div>
    )
}

export default ReviewList;