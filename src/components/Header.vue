<template>
  <div>
      <input type="search" v-model.trim='searched' placeholder='Cerca un film o serie' >
      <button type='button' @click='sendResult()'>Inizia a cercare</button>

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

<style>

</style>