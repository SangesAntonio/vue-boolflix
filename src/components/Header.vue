<template>
  <div>
      <input type="search" v-model='searched' placeholder='Cerca un film o serie' >
      <button type='button'>Inizia a cercare</button>

  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            searched:'',    

        }
    }
}
</script>

<style>

</style>