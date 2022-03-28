import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import FlashMessage from "@smartweb/vue-flash-message";

Vue.use(FlashMessage);

Vue.prototype.$api = axios.create({
    baseURL: "https://docketu.iutnc.univ-lorraine.fr:62016/",
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
