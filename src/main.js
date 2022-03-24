import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.prototype.$usersApi = axios.create({
    baseURL: "http://docketu.iutnc.univ-lorraine.fr:62011/",
});

// Vue.prototype.$eventsApi = axios.create({
// baseURL: "",
// });

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
