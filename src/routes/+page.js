export async function load({ fetch }) {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=6db95dcf2494e58e4b42337ea1f0be73&language=en-US&page=1'
    const res = await fetch(url);
    const movies = await res.json();
    const data = movies.results
    if (res.ok) {
        return {
          data
        };
    }
}
