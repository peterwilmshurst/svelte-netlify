export async function load({ fetch, params }) {
    // console.log(params.id);
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=6db95dcf2494e58e4b42337ea1f0be73&language=en-US&page=1`
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)

    if (res.ok) {
        return {
          data
        };
    }
}
