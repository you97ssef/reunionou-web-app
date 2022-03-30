<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.png" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Se connecter</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="email">Email</label>
                <input
                    id="email"
                    class="input"
                    type="email"
                    required
                    placeholder="Email"
                    v-model="email"
                />
            </div>
            <div class="field">
                <label for="password">Mot de passe</label>
                <input
                    id="password"
                    class="input"
                    type="password"
                    required
                    placeholder="Mot de passe"
                    v-model="password"
                />
            </div>
            <div class="field">
                <button class="button is-success">Connexion</button>
            </div>
        </form>
        <div>
            <router-link class="m-3" to="register">Créer un compte</router-link>
        </div>
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        validation() {
            // Login with basikc authorization done automaticlly with axios
            this.$api
                .post(
                    "auth",
                    {},
                    {
                        auth: {
                            username: this.email,
                            password: this.password,
                        },
                    }
                )
                .then((response) => {
                    // store user profile & token
                    this.$store.commit(
                        "setToken",
                        "Bearer " + response.data["refresh-token"]
                    );
                    this.$store.commit(
                        "setUser",
                        jwt_decode(response.data["refresh-token"]).upr
                    );

                    // Redirect to home page
                    this.$router.push("/");
                })
                .catch((err) =>
                    this.flashMessage.error({
                        message: "Impossible de se connecter.",
                    })
                );
        },
    },
};
</script>

<style></style>
