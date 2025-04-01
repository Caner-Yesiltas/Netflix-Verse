import { getMovies } from '@/helpers/movieFunctions';
import React from 'react'
export const metadata = {
  title: "Movies Page",
};

const Movies = async () => {
  const movies = await getMovies("now_playing")
  console.log(movies)
  return (
    <div>
    </div>
  )
}

export default Movies;
