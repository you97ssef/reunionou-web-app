<template>
    <div class="m-5 box">
        <form class="m-3" @submit.prevent="validation()">
            <h2 class="title is-2 has-text-centered">{{ event.title }}</h2>
            <label for="user">Add existing user</label>
            <div class="field">
                <div class="select is-fullwidth">
                    <select id="user"></select>
                </div>
            </div>
            <div class="field has-text-right">
                <button class="button is-success">Add User</button>
            </div>
        </form>
        <form class="m-3" @submit.prevent="validation()">
            <h2 class="mt-5 title is-4 has-text-centered">
                Generate a link for a guest
            </h2>
            <div class="field">
                <label for="guest">Guest username</label>
                <input
                    id="guest"
                    class="input"
                    type="text"
                    required
                    placeholder="Username"
                />
            </div>
            <div class="field has-text-right">
                <button class="button is-link">Generate link</button>
            </div>
        </form>
        <div class="card has-background-success-light">
            <div class="card-content">
                <router-link class="media" :to="'events/' + event.id">
                    <div class="media-left"></div>
                    <div class="media-content">
                        <p class="title is-5 has-text-link">
                            {{ event.title }}
                        </p>
                    </div>
                </router-link>
                <div class="content">
                    <div class="field">
                        <button class="button is-fullwidth is-link">
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
    data() {
        return {
            event: {
                id: "9a3f6f19-3f79-4079-ae09-807e813857fa",
                title: "Cook the Thief His Wife & Her Lover, The",
                description:
                    "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
                author: "18c4564a-2ab9-450e-ae17-aeddb70f10e6",
                spot: {
                    address: "5 Rue Blabla",
                    name: "Oyoloo",
                    coord: { latitude: 121.1293312, longitude: 14.5643857 },
                },
                date: "2021-06-01 08:37:58",
                created_at: "2021-07-04 23:59:03",
                updated_at: "2021-05-07 00:25:03",
            },
        };
    },
    methods: {
        validation() {},
    },
};
</script>

<style></style>
