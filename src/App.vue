<template>
  <div id="app">
    <Header @search-ready='getMovie'/>
    <Main :movies='movies' :series='series' :searching='searching'/>
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
      series:[],
      searching:'',
      query: ''
    }
  },
  
  methods:{
    getQuery(){
      this.query = this.searching
    },
    
    getMovie(search,){
      if(!search){
        this.movies = [];
        this.series = [];
        return ;
      }

      
      this.searching= search;
      this.getQuery();
      const config ={
        params:{
          api_key: '7ae9d79835583bbc51eb82040165f81f',
          query: this.query,
          language:'it-IT',
        },
      }
      
      axios.all([
        axios.get('https://api.themoviedb.org/3/search/movie', config),
        axios.get('https://api.themoviedb.org/3/search/tv', config)

      ])
      .then(axios.spread((res1, res2) => {
        this.movies= res1.data.results;
        this.series= res2.data.results;

      }));
      

    },
  
  },
  
}

</script>

<style lang="scss">
@import './assets/scss/style.scss';

</style>
