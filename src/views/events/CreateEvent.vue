<template>
    <div class="m-5 box">
        <h2 class="title is-2 has-text-centered">Créer un événement</h2>
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
                    :min="minDate"
                    required
                    placeholder="Date"
                />
            </div>
            <div class="field">
                <label for="time">Heure</label>
                <input
                    v-model="event.heure"
                    id="time"
                    class="input"
                    type="time"
                    placeholder="Heure"
                />
            </div>
            <div class="field">
                <label for="name">Lieu</label>
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
                <button
                    type="button"
                    @click="getPlaceByAddress()"
                    class="button is-success"
                >
                    Obtenir l'adresse
                </button>
            </div>

            <Map :event="event" ref="map" />
            <div class="mt-5 field">
                <button class="button is-success">Créer l'événement</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Map from "../../components/NewEventMap.vue";

export default {
    components: {
        Map,
    },
    created() {
        // Setting a minimum date
        this.minDate.setDate(this.minDate.getDate() + 1);
        this.event.date = this.minDate = this.minDate
            .toISOString()
            .slice(0, 10);
    },
    data() {
        return {
            event: {
                title: "",
                description: "",
                user_id: this.$store.state.user.user_id,
                location: {
                    name: "",
                    latitude: 48.677474,
                    longitude: 6.178464,
                },
                date: "",
                heure: "",
            },
            minDate: new Date(),
        };
    },
    methods: {
        // Creating a new Event
        validation() {
            this.$api
                .post("events", this.event)
                .then((response) => {
                    this.flashMessage.success({
                        message: "Evenement crée.",
                    });
                    this.$api
                        .post("members", {
                            user_id: this.$store.state.user.user_id,
                            event_id: response.data.event.id,
                            pseudo: this.$store.state.user.user_username,
                            status: 1,
                        })
                        .then(() =>
                            // If event is created going to its page
                            this.$router.push(
                                "/events/" + response.data.event.id
                            )
                        );
                })
                .catch((err) =>
                    this.flashMessage.error({
                        message: "Impossible de créer l'evenement.",
                    })
                );
        },

        // Getting the Location details by searching location name
        getPlaceByAddress() {
            axios
                .get(
                    "https://nominatim.openstreetmap.org/search?format=json&q=" +
                        this.event.location.name
                )
                .then((response) => {
                    if (response.data[0] === undefined) {
                        this.flashMessage.error({
                            message: "Pas d'emplacement trouvé.",
                        });
                    } else {
                        this.event.location.name =
                            response.data[0].display_name;
                        this.event.location.latitude = response.data[0].lat;
                        this.event.location.longitude = response.data[0].lon;

                        this.$refs.map.changeLocation([
                            this.event.location.latitude,
                            this.event.location.longitude,
                        ]);
                    }
                });
        },
    },
};
</script>

<style></style>
