<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.png" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Login</h2>
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
                <button class="button is-success">Se connecter</button>
            </div>
        </form>
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
                    this.$store.commit(
                        "setToken",
                        "Bearer " + response.data["refresh-token"]
                    );
                    this.$store.commit(
                        "setUser",
                        jwt_decode(response.data["refresh-token"]).upr
                    );

                    // Check if user is a member
                    this.$api
                        .get("member", {
                            params: {
                                event: this.$route.params.id,
                                user_id: this.$store.state.user.user_id,
                            },
                        })
                        .then((response) => {
                            if (response.data === null) {
                                // if he is not a member we add him as a
                                this.$api
                                    .post("members", {
                                        user_id: this.$store.state.user.user_id,
                                        event_id: this.$route.params.id,
                                        pseudo: this.$store.state.user
                                            .user_username,
                                        status: -1,
                                    })
                                    .then(() => {
                                        this.$router.push(
                                            "/events/" + this.$route.params.id
                                        );
                                    })
                                    .catch((err) =>
                                        this.flashMessage.error({
                                            message:
                                                "Impossible d'ajouter un membre.",
                                        })
                                    );
                            }
                            this.$router.push(
                                "/events/" + this.$route.params.id
                            );
                        });
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
