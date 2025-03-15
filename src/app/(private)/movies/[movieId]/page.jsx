import React from 'react'
export const metadata = {
  title: "Movie Detail Page",
};
const MovieDetail = async ({params}) => {
    const { movieId} = params;
    console.log(movieId);
    
  return (
    <div>
      MovieDetail
    </div>
  )
}

export default MovieDetail;
