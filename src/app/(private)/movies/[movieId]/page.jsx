import React from 'react'

const MovieDetail = async ({params}) => {
    const { movieId} = await params;
    console.log(movieId);
    
  return (
    <div>
      MovieDetail
    </div>
  )
}

export default MovieDetail;
