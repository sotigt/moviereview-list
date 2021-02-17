import { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext();

function MovieContextProvider(props) {

    const [moviereviews, setMoviereviews] = useState(JSON.parse(localStorage.getItem('moviereviews')) || [
        {
            title: "Lord of the rings",
            review: "A deeply moving story about a fellowship of dudes trying to get the ring to Mordor. On the way they face a lot of danger. It is very charming and interesting to watch. I recommend."
        },
        {
            title: "Loranga, Masarin och Dartanjang",
            review: "Best movie everrrrrrrrrrrrrrrrr."
        }
    ])

    const [isMoviereviewsChanged, setIsMoviereviewsChanged] = useState(false);

    useEffect(() => {
        if(isMoviereviewsChanged){
            localStorage.setItem('moviereviews', JSON.stringify(moviereviews));
        }

        setIsMoviereviewsChanged(false)
    }, [isMoviereviewsChanged])

    const addNewReview = (newReview) => {
        setMoviereviews([newReview, ...moviereviews])
        setIsMoviereviewsChanged(true)
    }

    const removeMovie = (review) => {
        setMoviereviews(
            moviereviews.filter(r => r != review)
        )

        setIsMoviereviewsChanged(true)
    }

    const values = {
        moviereviews,
        addNewReview,
        removeMovie
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;