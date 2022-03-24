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
                    class="input"
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
            <div class="field">
                <button class="button is-success">Créer Evenement</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            event: {
                title: "",
                description: "",
                date: "",
                time: "",
                location: {
                    name: "Zoombox",
                    latitude: 117.9483319,
                    longitude: -8.3501717,
                },
            },
        };
    },
    methods: {
        validation() {
            // TODO: POST Create event
            // this.$eventsApi
            //     .post(
            //         "URI", //TODO URI
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
