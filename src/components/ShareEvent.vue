<template>
    <div class="mb-5 box">
        <div class="field has-text-right">
            <button @click="toggleShareCard()" class="button is-danger">
                X
            </button>
        </div>
        <form
            class="m-3"
            @submit.prevent="validation()"
            v-if="this.$parent.member.user_id === this.$parent.creator.id"
        >
            <label for="user">Ajouter un utilisateur comme participant</label>
            <div class="field">
                <div class="select is-fullwidth">
                    <select id="user" required v-model="selected_user">
                        <option
                            v-for="user in users"
                            :key="user.user_id"
                            :value="user"
                        >
                            {{ user.user_fullname }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="field has-text-right">
                <button class="button is-success">Ajouter</button>
            </div>
        </form>

        <div class="card has-background-success-light">
            <div class="card-content">
                <div class="content">
                    <p class="title is-5 has-text-link">
                        {{ url }}
                    </p>
                    <div class="field">
                        <button
                            class="button is-fullwidth is-link"
                            @click="copy()"
                        >
                            Copier le lien
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["event"],
    data() {
        return {
            url: "https://" + window.location.hostname + "/invite/",
            users: [],
            selected_user: {},
        };
    },
    methods: {
        validation() {
            // Adding a member
            this.$api
                .post("members", {
                    user_id: this.selected_user.user_id,
                    event_id: this.$route.params.id,
                    pseudo: this.selected_user.user_username,
                    status: -1,
                })
                .then(() => {
                    this.$parent.reloadMembers();
                })
                .catch((err) =>
                    this.flashMessage.error({
                        message: "Impossible d'ajouter un membre.",
                    })
                );
        },
        copy() {
            // Copying the url to clipboard
            navigator.clipboard.writeText(this.url);
            this.flashMessage.success({
                message: "Vous aves copiez l'url.",
            });
        },
        toggleShareCard() {
            // To open or close the share card
            this.$emit("toggleShareCard");
        },
    },
    created() {
        // Getting all the users
        this.$api
            .get("users")
            .then((response) => {
                this.users = response.data.users;
            })
            .catch((err) =>
                this.flashMessage.error({
                    message: "Impossible d'obtenir les utilisateurs.",
                })
            );
        this.url += this.event.id;
    },
};
</script>

<style></style>
