export async function load({ fetch }) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API}&language=en-US&page=1`
    const res = await fetch(url);
    const movies = await res.json();
    const data = movies.results
    if (res.ok) {
        return {
          data
        };
    }
}
