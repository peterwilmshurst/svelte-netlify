export async function load({ fetch, params }) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API}&language=en-US&query=${params.id}&page=1&include_adult=false`
    const res = await fetch(url);
    const data = await res.json();

    if (res.ok) {
        return {
           data
        };
    }
}
