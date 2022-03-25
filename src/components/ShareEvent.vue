<template>
    <div class="mb-5 box">
        <div class="field has-text-right">
            <button @click="toggleShareCard()" class="button is-danger">
                X
            </button>
        </div>
        <form class="m-3" @submit.prevent="validation()">
            <h2 class="title is-5 has-text-centered">{{ event.title }}</h2>
            <label for="user">Add existing user</label>
            <div class="field">
                <div class="select is-fullwidth">
                    <select id="user">
                        <option
                            v-for="user in users"
                            :key="user.user_id"
                            value="user.user_id"
                        >
                            {{ user.user_fullname }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="field has-text-right">
                <button class="button is-success">Add User</button>
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
                            Copy link
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
            url: "http://localhost:8080/#/invite/",
            users: [],
        };
    },
    methods: {
        validation() {},
        copy() {
            navigator.clipboard.writeText(this.url);
            alert("Vous avez copiez l'url");
        },
        toggleShareCard() {
            this.$emit("toggleShareCard");
        },
    },
    created() {
        this.$usersApi
            .get("users")
            .then((response) => {
                this.users = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
        // this.$eventsApi.get('events/' + this.$route.params.id)
        // .then(response => {
        // this.event = response.data
        // })
        // .catch((err) => {
        //console.log(err)
        // this.$router.push("/404");
        // });
        this.url += this.event.id;
    },
};
</script>

<style></style>
