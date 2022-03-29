<template>
    <div>
        <div class="columns is-multiline is-mobile">
            <div class="column is-half-tablet is-full-mobile">
                <Map ref="map" />
            </div>
            <div class="column is-half-tablet is-full-mobile">
                <h1 class="title has-text-centered">{{ event.title }}</h1>
                <h3 class="m-3 title is-5 has-text-centered">
                    Date de l'evenement: {{ event.date }} - {{ event.heure }}
                </h3>

                <p class="title is-5 has-text-link">Createur: {{ creator }}</p>

                <p
                    class="title is-6 has-text-info has-text-centered"
                    v-if="meteo"
                >
                    <img :src="meteo.condition.icon" width="50px" alt="icon" />
                    {{ meteo.temp_c }} C°
                </p>

                <p class="m-5">
                    {{ event.description }}
                </p>

                <h3 class="m-3 title is-5">
                    Emplacement : {{ event.location.name }} -
                    {{ event.location.address }}
                </h3>

                <div v-if="status === -1">
                    <button
                        @click="changeStatus(1)"
                        class="button is-success is-small m-1"
                    >
                        Je viens
                    </button>
                    <button
                        @click="changeStatus(0)"
                        class="button is-danger is-small m-1"
                    >
                        désolé
                    </button>
                </div>

                <div class="column">
                    <h3 class="m-3 title is-5 has-text-centered">
                        Participants
                    </h3>
                    <div v-if="this.$store.state.user">
                        <div v-if="!shareCard" class="field has-text-centered">
                            <button
                                @click="toggleShareCard()"
                                class="button is-link is-small"
                            >
                                Ajouter participant
                            </button>
                        </div>
                        <div v-else>
                            <ShareEvent
                                :event="event"
                                @toggleShareCard="toggleShareCard()"
                            />
                        </div>
                    </div>
                    <Participants ref="members" />
                </div>
            </div>
        </div>
        <div>
            <h3 class="m-3 title is-5 has-text-centered">Commentaires</h3>
            <Messages />
        </div>
    </div>
</template>

<script>
import Participants from "../../components/EventParticipants.vue";
import ShareEvent from "../../components/ShareEvent.vue";
import Messages from "../../components/EventMessages.vue";
import Map from "../../components/EventMap.vue";
import axios from "axios";

export default {
    components: {
        Participants,
        Messages,
        ShareEvent,
        Map,
    },
    data() {
        return {
            status: -1,
            shareCard: false,
            event: {
                location: {
                    name: "Location",
                    latitude: 0,
                    longitude: 0,
                },
            },
            creator: "User",
            meteo: false,
            member: {},
        };
    },
    methods: {
        toggleShareCard() {
            this.shareCard = !this.shareCard;
        },
        reloadMembers() {
            this.$refs.members.reloadMembers();
        },
        changeStatus(status) {
            this.$api
                .put("members/" + this.member.id, {
                    user_id: this.member.user_id,
                    event_id: this.$route.params.id,
                    pseudo: this.member.pseudo,
                    status: status,
                })
                .then((response) => {
                    this.member = response.data.member;
                    this.reloadMembers();
                })
                .catch((err) => {
                    this.flashMessage.error({
                        message: "Impossible de changer le status.",
                    });
                });
        },
    },
    created() {
        this.$api
            .get("events/" + this.$route.params.id)
            .then((response) => {
                this.event = response.data.event;

                this.$refs.map.changePlacementByAddress([
                    this.event.location.latitude,
                    this.event.location.longitude,
                ]);

                // Meteo
                axios
                    .get(
                        `http://api.weatherapi.com/v1/current.json?key=920bc19c7c4049d4ab291530222803&q=${this.event.location.latitude},${this.event.location.longitude}&lang=fr`
                    )
                    .then((response) => {
                        this.meteo = response.data.current;
                    });

                this.$api
                    .get("users/" + this.event.user_id)
                    .then(
                        (response) => (this.creator = response.data.fullname)
                    );

                if (this.$store.state.user) {
                    this.$api
                        .get("member", {
                            params: {
                                event: this.$route.params.id,
                                user_id: this.$store.state.user.user_id,
                            },
                        })
                        .then((response) => {
                            this.member = response.data;
                        });
                } else {
                    this.member = this.$store.state.guest;
                }
            })
            .catch((err) =>
                this.flashMessage.error({
                    message: "Impossible d'obtenir l'evenement.",
                })
            );
    },
};
</script>

<style></style>
