<template>
  <div>
      <div>
          <h1 f-if='!movies-length'>Cerca qualcosa per iniziare</h1>
          <ul class="cards">
              <li class="card" v-for='(movie, index) in movies' :key='index'>
                <h1>{{movie.title}}</h1>
                <h2>{{movie.original_title}}</h2>
                <p>{{movie.original_language}}</p>
                <p>{{movie.vote_average}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Main',
    props:['movies', 'searching'],
    
}
</script>

<style>

</style>