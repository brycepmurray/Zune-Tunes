import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import $ from 'jquery'

var api = axios.create({
    baseURL: '//localhost:3000/mytunes/'
})

vue.use(vuex)

var store = new vuex.Store({
    state: {
        myTunes: [],
        results: []
    },
    mutations: {
        setResults(state, results) {
            state.results = results
        },

        setMyTunes(state, results) {
            results.sort(function(a, b) {
                return b.vote - a.vote
            })
            state.MyTunes = results
        },

        addToMyTunes(state, results) {
            state.myTunes.push(results)
        }
    },
    actions: {
        getMusicByArtist({ commit, dispatch }, artist) {
            var url = '//bcw-getter.herokuapp.com/?url=';
            var url2 = 'https://itunes.apple.com/search?term=' + artist;
            var apiUrl = url + encodeURIComponent(url2);
            $.get(apiUrl).then(data => {
                data = JSON.parse(data)
                commit('setResults', data.results)
            })
        },
        getMyTunes({ commit, dispatch }) {
            //this should send a get request to your server to return the list of saved tunes
            api.get('playlist')
                .then(result => {
                    console.log(result)
                    commit('setMyTunes', result.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addToMyTunes({ commit, dispatch }, track) {
            //this will post to your server adding a new track to your tunes
            api.post('playlist', track)
                .then(result => {
                    commit(addToMyTunes, track)
                })
                .catch(err => { console.log(err) })
        },
        delete({ commit, dispatch }, track) {
            //Removes track from the database with delete
            api.delete('playlist/songs/' + track._id)
                .then(result => {
                    dispatch('getMyTunes')
                })
        },
        upVote({ commit, dispatch }, track) {
            //this should increase the position / upvotes and downvotes on the track
            track.vote++
                api.put('playlist/songs/' + track._id, track)
                .then(result => {
                    dispatch('getMyTunes')
                })
        },
        downVote({ commit, dispatch }, track) {
            track.vote--
                api.put('playlist/songs/' + track._id, track)
                .then(result => {
                    dispatch('getMyTunes')
                })
        },
        //this should decrease the position / upvotes and downvotes on the track
    }
})

export default store