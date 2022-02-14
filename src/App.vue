<template>
  <div id="app">
    <Header @search-ready='getSearch'/>
    <Main :movies='movies' :searching='searching'/>
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
      searching:'',
    }
  },
  
  methods:{
    getSearch(search){
      this.searching= search;

    },
    
    getMovie(){
      const config ={
        params:{
        api_key:'7ae9d79835583bbc51eb82040165f81f',
        query: '',
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
  computed:{
    getQuery(){
      return this.query=this.search;
    }
  },
  mounted(){
      this.getMovie();
  }
}
  
</script>

<style lang="scss">

</style>
