import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import FlashMessage from "@smartweb/vue-flash-message";

// Toast messages
Vue.use(FlashMessage);

// Service API
Vue.prototype.$api = axios.create({
    baseURL: "http://docketu.iutnc.univ-lorraine.fr:62015/",
});

// Date pipe
Vue.use(require("vue-moment"));

// Attaching token Authorization to requests if user or guest are conncted
Vue.prototype.$api.interceptors.request.use(function (config) {
    if (store.state.token) {
        config.headers.Authorization = store.state.token;
    }
    return config;
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
