<template>
    <div class="mb-5 box">
        <div class="field has-text-right">
            <button @click="toggleShareCard()" class="button is-danger">X</button>
        </div>
        <form class="m-3" @submit.prevent="validation()">
            <h2 class="title is-5 has-text-centered">{{ event.title }}</h2>
            <label for="user">Add existing user</label>
            <div class="field">
                <div class="select is-fullwidth">
                    <select id="user">
                        <option
                            v-for="user in users"
                            :key="user.id"
                            value="user.id"
                        >
                            {{ user.fullname }}
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
            users: [
                {
                    id: "fe368f1a-041f-41ef-96ce-d2e2735ed8be",
                    fullname: "Hartwell Scrimgeour",
                    email: "hscrimgeour0@reverbnation.com",
                    username: "hscrimgeour0",
                    password:
                        "$2y$10$d8FP4p1bW1ykBkOZAAAe3u9HBI5zXCsDkloIAXgciSGBAh.bog0gG",
                    refresh_token: "05da9d31-9219-4ce0-8180-6552db55242a",
                    created_at: "2021-08-07 20:21:15",
                    updated_at: "2021-05-02 07:48:35",
                    is_admin: false,
                },
                {
                    id: "5ed2060c-ad97-4dcd-bb28-db95e60af7b8",
                    fullname: "Theresa Blenkhorn",
                    email: "tblenkhorn1@nature.com",
                    username: "tblenkhorn1",
                    password:
                        "$2y$10$d8FP4p1bW1ykBkOZAAAe3u9HBI5zXCsDkloIAXgciSGBAh.bog0gG",
                    refresh_token: "edeb269f-810b-4b06-996f-a37e87d82134",
                    created_at: "2021-09-01 13:56:08",
                    updated_at: "2021-10-21 09:51:42",
                    is_admin: false,
                },
                {
                    id: "e34e9619-32ea-4552-8bfe-8c9febe8a5e9",
                    fullname: "Ronni Kellington",
                    email: "rkellington2@oakley.com",
                    username: "rkellington2",
                    password:
                        "$2y$10$d8FP4p1bW1ykBkOZAAAe3u9HBI5zXCsDkloIAXgciSGBAh.bog0gG",
                    refresh_token: "924265c5-1c6e-469b-b1dc-c6f151bdbd4f",
                    created_at: "2021-12-12 10:04:57",
                    updated_at: "2021-11-27 13:56:25",
                    is_admin: false,
                },
            ],
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
        // this.$usersApi.get('users/')
        // .then(response => {
        // this.users = response.data
        // })
        // .catch((err) => {
        //console.log(err)
        // });
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
