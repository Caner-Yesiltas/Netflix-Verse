const API_KEY = process.env.TMDB_KEY;

export const getMovies = async (type) => {
  const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
  const res = await fetch(URL);

  //   const res = await fetch(URL, { cache: "force-cache" }); default
  //   const res = await fetch(URL, { cache: "no-store" });
  //   const res = await fetch(URL, { next: { revalidate: 10 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { results } = await res.json();
  return results;
};

export const getVideoKey = async (id) => {
  const vıdeoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(vıdeoUrl, { next: { revalidate: 86400 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = await res.json();
  return results.results[0]?.key;
};


export const getMovieDetails = async (movieId) => {
  const lang = "en-US"; // ensure API responses return English content consistently
const movieDetailBaseUrl= `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${lang}`;

const res = await fetch(movieDetailBaseUrl, { next: { revalidate: 86400 } });  // revalidate data every 24 hours (ISR)

if (!res.ok) {
  throw new Error("Failed to fetch data");
}

const data = await res.json()
return data;
};