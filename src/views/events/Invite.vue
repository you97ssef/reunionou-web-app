<template>
    <div class="m-5 box">
        <figure class="has-text-centered">
            <img src="@/assets/images/user.jpg" width="100" alt="img" />
        </figure>
        <h2 class="title is-2 has-text-centered">Se connecter comme invité</h2>
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
            <router-link class="m-3" to="/login"
                >Se connecter comme utilisateur</router-link
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
    methods: {
        validation() {
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
