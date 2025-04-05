import React from 'react'
import MovieCard from './MovieCard';
import { getMovies } from '@/helpers/movieFunctions';

const MovieSection = async ({title, type}) => {
    const sectionMovies = await getMovies(type);
  return (
    <div className="mb-4">
      <p className= "text-white text-md md:text-xl lg:text-2xl font-semibold mb-4" >
        {title}
      </p>
      <div className="grid grid-flow-col gap-2 overflow-x-scrool" >
    {sectionMovies.map((movie) => (
        <MovieCard   key={movie.id} {...movie} />
    ))}
      </div>
    </div>
  )
}

export default MovieSection
