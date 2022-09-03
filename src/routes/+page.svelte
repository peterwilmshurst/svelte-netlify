<script> 
    export let data
    // console.log(data.data);
    import PopularMovies from "../components/PopularMovies.svelte";
</script>

<section>
    <PopularMovies data={data.data} />
</section>
