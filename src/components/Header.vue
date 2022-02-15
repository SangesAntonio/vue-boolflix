<template>
<div class=" header sticky-top">


  <div class="d-flex container research justify-content-between align-items-center">
      <h1>BOOLFLIX</h1>
      <div>
      <input type="search" v-model.trim='searched' placeholder='Cerca un film o serie' >
      <button type='button' @click='sendResult()'>Cerca</button>

      </div>

  </div>
</div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            searched:'',    
        }
    },
    methods:{
        sendResult(){
            this.$emit("search-ready", this.searched);
           
        },
        
    }
}
</script>

<style scoped lang='scss'>
.header{
    background-color: black;
    box-shadow: 0 0 20px 10px black;
    height: 100px;
    .research{
        height: 100px;
        input{
            color: red;
            border: none;
            text-decoration: none;
        }
        button{
            background-color: red;
            border: none;
            color: white;
            border-radius: 5px;
            margin-left: 10px;
            
        }
    }
    h1{
        color: rgb(187, 27, 27);
    }
}
</style>