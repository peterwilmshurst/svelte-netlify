export async function load({ fetch, params }) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6db95dcf2494e58e4b42337ea1f0be73&language=en-US&query=${params.id}&page=1&include_adult=false`
    const res = await fetch(url);
    const data = await res.json();

    if (res.ok) {
        return {
           data
        };
    }
}
