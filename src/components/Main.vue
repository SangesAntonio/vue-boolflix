<template>
 <section class="main text-center">


    <h1  v-if="!movies.length">Cerca qualcosa per iniziare</h1>
  <div class="container ">
      <div class='row '>
          <h2 v-if="movies.length">Film</h2>
          <div class="row ">
            <Card class='cs-over' v-for='(movie, index) in movies' :key='movie.id || index'
            :item='movie'
            :title='movie.title'
            :originalTitle='movie.original_title'
            :originalLanguage='movie.original_language'
            :vote='movie.vote_average'
            baseUrl='https://image.tmdb.org/t/p/w342'
            
            />
          </div>
      </div>

          <h2 v-if="series.length">Serie</h2>
      <div class="row">
        <div class="row">
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
  </section> 
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

<style scoped lang='scss'>
.main{
    background-color: rgb(95, 94, 94);
    min-height: calc(100vh - 100px);
    margin: auto 0;
    padding-top: 50px;

    h2{
        
        
        color: white;
        
        
        
    }
    
   
}
</style>