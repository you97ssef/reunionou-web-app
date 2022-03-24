<template>
    <div id="app">
        <Navbar :username="this.$store.state.user.username" @deconnect="deconnect" />
        <section class="section">
            <div class="container">
                <router-view />
            </div>
        </section>
    </div>
</template>

<style></style>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    data() {
        return {
            username: "false",
        };
    },
    components: {
        Navbar,
    },
    mounted() {
    },
    methods: {
        deconnect() {
            this.$store.commit("setToken", null);
            this.$store.commit("setUser", false);
            this.$router.push("/login");
        },
    },
};
</script>
