import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userinfo: null
    },
    mutations: {
        setUser(state, user) {
            state.userinfo = user;
        },
    },
    actions: {
        setUser({ commit }) {
            console.log('xxx');
            commit('setUser', {
                userID: 1,
                name: 'Bundit Sankhumpha'
            });
        }
    }
})