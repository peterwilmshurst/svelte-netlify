<script> 
    export let data
    // console.log(data.data);
    import SearchMovies from "../components/SearchMovies.svelte";
    import PopularMovies from "../components/PopularMovies.svelte";
</script>

<section>
    <SearchMovies />
    <PopularMovies data={data.data} />
</section>
