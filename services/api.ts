// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTllNmU4NTc3YjVhYTdjYjJkZDMwZjA5YzU1YWFkYiIsIm5iZiI6MTc0OTY0MDMwMS4yMDg5OTk5LCJzdWIiOiI2ODQ5NjQ2ZDU1ZDU5NGQzYTY5ZjU5ODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aTHBxqu4YzkYItqT7y1tGA1KyT8LbqffSULYC9c6zIs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
  };

  export const fetchMovies = async ({
    query,
  }: {
    query: string;
  }): Promise<Movie[]> => {
    const endpoint = query
      ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  
    const response = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.results;
  };