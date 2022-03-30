import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import FlashMessage from "@smartweb/vue-flash-message";

Vue.use(FlashMessage);

Vue.prototype.$api = axios.create({
    baseURL: "http://docketu.iutnc.univ-lorraine.fr:62015/",
});

Vue.use(require("vue-moment"));

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
