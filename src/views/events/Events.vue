<template>
    <div>
        <h1 class="title has-text-centered">Liste des événements</h1>
        <div class="columns is-multiline is-mobile">
            <div
                class="column is-half-tablet is-one-third-desktop is-full-mobile"
                v-for="event in this.events"
                :key="event.id"
            >
                <Event :event="event" />
            </div>
        </div>
    </div>
</template>

<script>
import Event from "../../components/EventCard.vue";

export default {
    components: {
        Event,
    },
    data() {
        return {
            events: [],
        };
    },
    methods: {},
    created() {
        // Getting events where the user participate
        this.$api
            .get("users/" + this.$store.state.user.user_id + "/events")
            .then((response) => {
                this.events = response.data.events;
            })
            .catch((err) =>
                this.flashMessage.error({
                    message: "Impossible d'obtenir les evenements.",
                })
            );
    },
};
</script>

<style></style>
