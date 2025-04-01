const API_KEY =process.env.TMDB_KEY;



export const getMovies = async (type) => {
    const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
    const res = await fetch(URL)

   //   const res = await fetch(URL, { cache: "force-cache" }); default
   //   const res = await fetch(URL, { cache: "no-store" });
   //   const res = await fetch(URL, { next: { revalidate: 10 } });

    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }

    const results = await res.json()
    console.log(results.results)
    return results;
}



