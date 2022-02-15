<template>
  <ul class="cards">
        <li class="card" >
           <img :src="getPoster" alt="">
            <h1>{{title}}</h1>
            <h2>{{originalTitle}}</h2>
            <div>
                <img v-if="originalLanguage === 'en' || originalLanguage === 'it'" :src="require (`../assets/img/${originalLanguage}.png`)" :alt="originalLanguage">
            <p v-else >{{originalLanguage}}</p>
            </div>
            <div  v-for='(vote, index) in convertVote' :key='index' >
            <i class="fa-solid fa-star"></i>
            </div>
            <div  v-for='(star, index) in setStars' :key='index' >
            <i class="fa-regular fa-star"></i>
            </div>

            <p>{{convertVote}}</p>
        </li>
 </ul>
</template>

<script>
export default {
    name: 'Card',
    props: ['item','title','originalTitle','vote','originalLanguage','baseUrl'],
    data(){
        return{
        }
    },
    methods:{
    },
    computed:{
        convertVote(){
            return Math.ceil(this.vote / 2);
        },

        setStars(){
            return 5 - this.convertVote;
        },
        getPoster(){
            if(!this.item['poster_path']){
                return require ('../assets/img/unvalid.jpg');
            }
                return  (this.baseUrl + this.item['poster_path']);
            
        },
        
    }

}
</script>

<style>

</style>