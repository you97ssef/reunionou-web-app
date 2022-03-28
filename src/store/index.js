import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

export default new Vuex.Store({
    state: {
        token: "",
        user: false,
        guest: false,
    },
    getters: {},
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.guest = false;
        },
        setUser(state, user) {
            state.user = user;
        },
        setGuest(state, guest) {
            state.guest = guest;
        },
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin],
});
