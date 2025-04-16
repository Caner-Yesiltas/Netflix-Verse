'use client';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const PrivateLayout = ({ children }) => {
  const { currentUser } = useAuthContext;
  

  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user')) || null;

    if (!user) {
      router.push('/login');
    }
  }, [currentUser]);

  return <div>{children}</div>;
};

export default PrivateLayout;

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//     const movies = await getMovies("now_playing");

//     return movies.map((movie) => ({
//       movieId: movie.id.toString(),
//     }));
//   }
