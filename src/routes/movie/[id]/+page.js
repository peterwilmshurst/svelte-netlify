export async function load({ fetch, params }) {
    // console.log(params.id);
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API}&language=en-US&page=1`
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)

    if (res.ok) {
        return {
          data
        };
    }
}
