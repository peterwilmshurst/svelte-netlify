<script>
    export let data
    console.log(data.data)
</script>

<div class="movie-detail">
    <div class="img-container">
        <img src={'https://image.tmdb.org/t/p/original' + data.data.backdrop_path} alt={data.data.title}>
    </div>
    <div class="txt-container">
        <h1>{data.data.title}</h1>
        <p class="overview">{data.data.overview}</p>
    <p><span>Release Date:</span>
    {data.data.release_date}<br />

    <p><span>Budget:</span>
        {data.data.budget}<br />

        <p><span>Rating:</span>
            {data.data.vote_average}<br />

            <p><span>Runtime:</span>
                {data.data.runtime}mins
    

</p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0rem 2rem;
    }
    p {
        padding: 1rem 0rem;
    }
    .img-container {
        width: 100%;
    }
    img {
        width: 100%;
        border-radius: 1rem;
    }
    .movie-details {
        margin: 2rem 20%;
    }
    span {
        font-weight: bold;
    }
</style>