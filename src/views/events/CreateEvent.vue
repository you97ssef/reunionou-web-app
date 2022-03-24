<template>
    <div class="m-5 box">
        <h2 class="title is-2 has-text-centered">Créer un evenement</h2>
        <form class="m-3" @submit.prevent="validation()">
            <div class="field">
                <label for="title">Titre</label>
                <input
                    v-model="event.title"
                    id="title"
                    class="input"
                    type="text"
                    required
                    placeholder="Titre"
                />
            </div>
            <div class="field">
                <label for="description">Description</label>
                <textarea
                    v-model="event.description"
                    id="description"
                    rows="3"
                    class="textarea"
                    type="text"
                    required
                    placeholder="Description"
                ></textarea>
            </div>
            <div class="field">
                <label for="date">Date</label>
                <input
                    v-model="event.date"
                    id="date"
                    class="input"
                    type="date"
                    required
                    placeholder="Date"
                />
            </div>
            <div class="field">
                <label for="time">Heure</label>
                <input
                    v-model="event.time"
                    id="time"
                    class="input"
                    type="time"
                    required
                    placeholder="Heure"
                />
            </div>
            <div class="field">
                <label for="name">Location</label>
                <input
                    v-model="event.location.name"
                    id="name"
                    class="input"
                    type="text"
                    required
                    placeholder="nom"
                />
            </div>
            <div class="field">
                <!-- Adresse -->
                <input
                    v-model="event.location.latitude"
                    class="input"
                    type="text"
                    required
                    placeholder="Adresse"
                />
            </div>
            <div class="field">
                <!-- Adresse -->
                <input
                    v-model="event.location.longitude"
                    class="input"
                    type="text"
                    required
                    placeholder="Adresse"
                />
            </div>

            <Map :event="event" />
            <div class="mt-5 field">
                <button class="button is-success">Créer Evenement</button>
            </div>
        </form>
    </div>
</template>

<script>
import Map from "../../components/NewEventMap.vue";

export default {
    components: {
        Map,
    },
    data() {
        return {
            event: {
                id: "e04cc94c-77a7-4671-8e52-34eb1d781d57",
                title: "Dr. Dolittle",
                description:
                    "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sitet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
                user_id: "/users/73beeb05-f733-4a1b-b425-dc82c2bce9ae",
                location: {
                    name: "Photofeed",
                    latitude: 48.677474,
                    longitude: 6.178464,
                },
                date: "12/11/2021",
                heure: "7:58",
                created_at: "2021-06-27 22:55:30",
                updated_at: "2022-02-04 18:08:10",
            },
        };
    },
    methods: {
        validation() {
            // TODO: POST Create event
            // this.$eventsApi
            //     .post(
            //         "events", //TODO URI
            //         {}, //TODO BODY
            //         {} //TODO HEADERS
            //     )
            //     .then((response) => {
            //         console.log(response);
            alert("Event created");
            this.$router.push("/events/" + "ID");
            //     })
            //     .catch((err) => console.log(err));
        },
    },
};
</script>

<style></style>
