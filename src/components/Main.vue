<template>
  <div>
          <h1 v-if="!movies.length">Cerca qualcosa per iniziare</h1>
      <div>
          <h2 v-if="movies.length">Film</h2>
          <ul class="cards">
              <li class="card" v-for='(movie, index) in movies' :key='movie.id || index'>
                <h1>{{movie.title}}</h1>
                <h2>{{movie.original_title}}</h2>
                <div>
                    <img v-if="movie.original_language === 'en' || movie.original_language === 'it'" :src="require (`../assets/img/${movie.original_language}.png`)" :alt="movie.original_language">
                <p v-else >{{movie.original_language}}</p>
                </div>
                <p>{{movie.vote_average}}</p>
              </li>
          </ul>
      </div>
      <div>
          <h2 v-if="series.length">Serie</h2>

          <ul class="cards">
              <li class="card" v-for='(serie, index) in series' :key='series.id || index'>
                <h1>{{serie.name}}</h1>
                <h2>{{serie.original_name}}</h2>
                <div>
                    <img v-if="serie.original_language === 'en' || serie.original_language === 'it'" :src="require (`../assets/img/${serie.original_language}.png`)" :alt="serie.original_language">
                <p v-else >{{serie.original_language}}</p>
                </div>
                <p>{{serie.vote_average}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Main',
    props:['movies', 'searching', 'series'],
    
    
}
</script>

<style>

</style>