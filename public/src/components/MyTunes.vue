<template>
    <div class="my-tunes">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <h3>My Playlist</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6" v-for="myTune in myTunes">
                        <img :src="song.artworkUrl100">
                        <h4>Title:{{myTune.title}}</h4>
                        <h5>Artist: {myTune.artist}}</h5>
                        <audio controls style="width: 100%">
                            <source :src="song.preview">
                            </audio>
                            <button @click="remove(song._id)" type="button" class="btn btn-primary">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        name: 'My-Tunes',
        data() {
            return {

            }
        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            }
        },
        mounted() {
            this.$store.dispatch('getMyTunes')
        },
        methods: {
            delete(song) {
                this.$store.dispatch('removeTrack', song)
            },
            upVote(MyTune) {
                this.$store.dispatch('upVote', myTune)
            },
            downVote(MyTune) {
                this.$store.dispatch('downVote', myTune)
            }

        }
    }
</script>

<style scoped>

</style>