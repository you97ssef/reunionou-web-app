<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.png" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">
            Se connecter en tant qu'invité
        </h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="pseudo">Pseudo</label>
                <input
                    id="pseudo"
                    class="input"
                    type="text"
                    required
                    placeholder="Pseudo"
                    v-model="pseudo"
                />
            </div>
            <div class="field">
                <button class="button is-success">Se connecter</button>
            </div>
        </form>
        <div>
            <router-link
                class="m-3"
                :to="'/login-with-invite/' + this.$route.params.id"
                >Se connecter en tant qu'utilisateur</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pseudo: "",
        };
    },
    created() {
        if (this.$store.state.user) {
            this.$api
                .get("member", {
                    params: {
                        event: this.$route.params.id,
                        user_id: this.$store.state.user.user_id,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    if (response.data === null) {
                        this.$api
                            .post("members", {
                                user_id: this.$store.state.user.user_id,
                                event_id: this.$route.params.id,
                                pseudo: this.$store.state.user.user_username,
                                status: -1,
                            })
                            .then(() => {
                                this.$router.push(
                                    "/events/" + this.$route.params.id
                                );
                            })
                            .catch((err) =>
                                this.flashMessage.error({
                                    message: "Impossible d'ajouter un membre.",
                                })
                            );
                    } else {
                        this.$router.push("/events/" + this.$route.params.id);
                    }
                });
        }
    },
    methods: {
        validation() {
            const sign = require("jwt-encode");
            const secret = "helloimaguestonthereunionouappmadebyssomestudents";
            const data = {
                upr: {
                    guest_pseudo: this.$store.state.guest.pseudo,
                },
            };
            this.$store.commit("setToken", "Bearer " + sign(data, secret));

            let params = {
                event: this.$route.params.id,
                pseudo: this.pseudo,
            };

            this.$api
                .get("member", {
                    params: params,
                })
                .then((response) => {
                    if (response.data === null) {
                        this.$api
                            .post("members", {
                                pseudo: this.pseudo,
                                event_id: this.$route.params.id,
                                user_id: null,
                                status: -1,
                            })
                            .then((response) => {
                                this.$store.commit(
                                    "setGuest",
                                    response.data.member
                                );
                                this.$router.push(
                                    "/events/" + this.$route.params.id
                                );
                            })
                            .catch((err) =>
                                this.flashMessage.error({
                                    message: "Impossible de se connecter.",
                                })
                            );
                    } else {
                        this.$store.commit("setGuest", response.data);
                        this.$router.push("/events/" + this.$route.params.id);
                    }
                });
        },
    },
};
</script>

<style></style>
