<template>
  <div class="card-cs col-4">
      <div class="m-4 border border-5">

        
        <img :src="getPoster" class="img-fluid w-100" alt="">

    
        <div class="hovers"  >

            <h1>Titolo: {{title}}</h1>
            <h2>{{originalTitle}}</h2>
            <div class="">
                <img v-if="originalLanguage === 'en' || originalLanguage === 'it'" :src="require (`../assets/img/${originalLanguage}.png`)" :alt="originalLanguage" class="img-fluid w-25">
            <p v-else >{{originalLanguage}}</p>
            </div>
            <i v-for='(vote, index) in convertVote' :key='index' class="fa-solid fa-star"></i>
            <i  v-for='(star, index) in setStars' :key='index' class="fa-regular fa-star"></i>
            <p>{{item.overview}}</p>
        
        </div>
        
      </div>
 </div>
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

<style scoped lang='scss'>
.card-cs{
    padding: 10px;
    position: relative;
    
   

    .hovers{
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.52);
        color: white;
        width: 100%;
        height: 500px;
        overflow-y: auto;
        
    }
}
.cards-cs:hover .hovers{
    display: inline-block;
}
</style>