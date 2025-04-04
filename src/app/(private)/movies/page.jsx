import { getMovies } from '@/helpers/movieFunctions';
import React from 'react'
import HeroSection from './components/Herosection';
export const metadata = {
  title: "Movies Page",
};

const Movies = async () => {
  const movies = await getMovies("now_playing")
  console.log(movies);
  
  if (!movies || movies.length === 0) {
    // Handle the case when movies is empty or undefined
    return <div>No movies found.</div>;
  }
  return (
    <div>
      <HeroSection
      title ={movies[0].title}
      overview={movies[0]?.overview}
      id={movies[0]?.id}
      />
    </div>
  )
}

export default Movies;
 