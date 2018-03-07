<template>
    <div class="itunes">
            <div class="row">
                    <div class="col-md-4">
                        <h3 class="title">Search</h3>
                        <form @submit.prevent="searchByArtist">
                            <input style="color:grey" type="text" placeholder="Artist" v-model="artist"> 
                            <button class="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div class="row cards">
                        <div class="col-md-5 card text-center justify-center" v-for="song in songs">
                        <img class="resize" :src="song.artworkUrl100">
                        <h4>Title: {{song.trackName}}</h4>
                        <h5>Artist: {{song.artistName}}</h5>
                        <audio controls style="width:100%">
                            <source :src="song.previewUrl">
                        </audio>
                        <button @click="addToPlaylist(song)" class="btn btn-primary" type="button">Add to Favorites</button>
                    </div>
                </div>
    </div>
</template>

<script>
    export default {
        name: 'iTunes',
        data() {
            return {
                artist: ""

            }
        },
        methods: {
            searchByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToPlaylist(song) {
                this.$store.dispatch('addToMyTunes', song)
            }
        },
        computed: {
            songs() {
                return this.$store.state.results
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: aliceblue;
        box-shadow: 6px 6px 5px rgba(56, 56, 56, 0.7);
        min-width: 17%;
        margin-bottom: 2rem
    }
    
    .cards {
        justify-content: space-around
    }
    
    .resize {
        width: 80%;
        padding-left: 4rem;
        margin-bottom: 1rem
    }
</style>