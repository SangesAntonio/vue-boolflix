<template>
  <div id="app">
    <Header />
    <Main :movies='movies'/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data(){
    return{
      movies:[],
    
    }
  },
  
  methods:{
    
    getMovie(){
      const config ={
        params:{
        api_key:'7ae9d79835583bbc51eb82040165f81f',
        query:'the',
        language:'it-IT',
        },
      }
      axios
      .get('https://api.themoviedb.org/3/search/movie', config)
      .then((res )=>{
        this.movies= res.data.results;

      });
    }
  },
  mounted(){
      this.getMovie();
  }
}
  
</script>

<style lang="scss">

</style>
