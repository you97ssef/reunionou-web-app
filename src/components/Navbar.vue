<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item title m-0">
                REUNIONOU
            </router-link>
            <a
                role="button"
                v-on:click="showNav = !showNav"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div
            id="navbar"
            class="navbar-menu"
            v-bind:class="{ 'is-active': showNav }"
            v-if="username"
        >
            <div class="navbar-start">
                <router-link class="navbar-item" to="/">Événements</router-link>
                <router-link to="/new-event" class="navbar-item"
                    >Nouvel événement</router-link
                >
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <p>
                        Bonjour 
                        <b> {{username}}<router-link to="/edit-profile">(Modifier mon profil)</router-link></b>
                    </p>
                </div>
                <form class="navbar-item" @submit.prevent="deconnect()">
                    <button class="button is-danger">Se déconnecter</button>
                </form>
            </div>
        </div>
        <div
            id="navbar"
            class="navbar-menu"
            v-bind:class="{ 'is-active': showNav }"
            v-else
        >
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link class="button is-primary" to="/register"
                            >Créer un compte</router-link
                        >
                        <router-link class="button is-light" to="/login"
                            >Se connecter</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ["username"],
    data() {
        return {
            showNav: false,
        };
    },
    methods: {
        deconnect() {
            this.$emit("deconnect");
        },
    },
};
</script>

<style></style>
