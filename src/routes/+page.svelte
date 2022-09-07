<script> 
    export let data
    // console.log(data.data);
    import SearchMovies from "../components/SearchMovies.svelte";
    import PopularMovies from "../components/PopularMovies.svelte";
    import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <SearchMovies />
    <PopularMovies data={data.data} />
</section>
