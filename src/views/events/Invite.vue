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
import jwt_decode from "jwt-decode";

export default {
    data() {
        return {
            pseudo: "pseudo",
        };
    },
    methods: {
        validation() {
            console.log(this.pseudo);
            this.$store.commit("setGuest", { guest: this.pseudo });
            this.$router.push("/events/" + this.$route.params.id);

            // this.$api
            //     .post(
            //         "members", // TODO url of endpoint
            //         {
            //             pseudo: this.pseudo,
            //             event: this.$route.params.id,
            //         }
            //     )
            //     .then((response) => {
            //         console.log(response.data);
            //         this.$store.commit("setGuest", response.data.guest);
            //         this.$router.push("/events/" + this.$route.params.id);
            //     })
            //     .catch((err) => console.log(err));
        },
    },
};
</script>

<style></style>
