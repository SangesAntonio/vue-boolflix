<template>
  <div>
    <h1 v-if="!movies.length">Cerca qualcosa per iniziare</h1>
      <div>
          <h2 v-if="movies.length">Film</h2>
          <div >
            <Card v-for='(movie, index) in movies' :key='movie.id || index'
            :item='movie'
            :title='movie.title'
            :originalTitle='movie.original_title'
            :originalLanguage='movie.original_language'
            :vote='movie.vote_average'
            baseUrl='https://image.tmdb.org/t/p/w342'
            
            />
          </div>
      </div>

      <div>
          <h2 v-if="series.length">Serie</h2>
        <div>
            <Card v-for='(serie, index) in series' :key='series.id || index'
            :item='serie'
            :title='serie.name'
            :originalTitle='serie.original_title'
            :originalLanguage='serie.original_language'
            :vote='serie.vote_average'
            baseUrl='https://image.tmdb.org/t/p/w342'
            
            />
        </div>
          
      </div>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
    name: 'Main',
    props:['movies', 'searching', 'series'],
    components:{
        Card,
    },
    data(){
        return {
            urlBaseImg:'https://image.tmdb.org/t/p/w342',
            convertedVote:'',
        }
    },
    methods:{
        
        
    },
    
    
}
</script>

<style>

</style>