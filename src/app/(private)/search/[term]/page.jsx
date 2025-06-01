
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const { term } = useParams();       
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!term) return;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?` +
          `api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}` +
          `&query=${encodeURIComponent(term)}&page=1&include_adult=false`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
         console.error("API failed:", err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [term]);

  return (
    <div className="p-4">
     

      {loading && <p>Loading…</p>}

      {!loading && movies.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen text-white">
  <p>No results found.</p>
        </div>
      
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="cursor-pointer"
            onClick={() => router.push(`/movies/${movie.id}`)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/images/default-slate.png"
              }
              alt={movie.title}
              className="w-full rounded-md mb-2"
            />
            <p className="text-sm">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
