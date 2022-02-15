<template>
  <ul class="cards">
        <li class="card" >
           
            <h1>{{title}}</h1>
            <h2>{{originalTitle}}</h2>
            <div>
                <img v-if="originalLanguage === 'en' || originalLanguage === 'it'" :src="require (`../assets/img/${originalLanguage}.png`)" :alt="originalLanguage">
            <p v-else >{{originalLanguage}}</p>
            </div>
            <i class="fa-solid fa-star"></i>
            <p>{{convertVote(item)}}</p>
        </li>
 </ul>
</template>

<script>
export default {
    name: 'Card',
    props: ['item','title','originalTitle','vote','originalLanguage'],
    data(){
        return{
        }
    },
    methods:{
        convertVote(item){
            return this.convertedVote = Math.floor(item.vote_average / 2);
        },
    
        
    },

}
</script>

<style>

</style>