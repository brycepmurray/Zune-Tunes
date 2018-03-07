<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h1>Zune Tunes</h1>
      </div>

    </div>
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <itunes class="itunes"></itunes>
    <my-tunes class="my-tunes"></my-tunes>
  </div>
</template>

<script>
    import MyTunes from './MyTunes.vue'
    import Itunes from './Itunes.vue'
    export default {
        name: 'home',
        data() {
            return {

            }
        },
        components: {
            Itunes,
            MyTunes
        },
        methods: {
            getMyTunes() {
                this.$store.dispatch('getMyTunes')
            }
        }
    }
</script>


<style scoped>
    .my-tunes {
        display: inline-block;
        min-height: 500px;
        min-width: 50%;
        background: green;
    }
    
    .itunes {
        display: inline-block;
        background: red;
        min-height: 500px;
        max-width: 45%;
    }
</style>