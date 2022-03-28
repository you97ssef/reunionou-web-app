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

                <p class="m-5">
                    {{ event.description }}
                </p>

                <h3 class="m-3 title is-5">
                    Emplacement : {{ event.location.name }} -
                    {{ event.location.address }}
                </h3>

                <div v-if="status === -1">
                    <button
                        @click="changeStatus()"
                        class="button is-success is-small m-1"
                    >
                        Je viens
                    </button>
                    <button
                        @click="changeStatus()"
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
            // this.$api.put('members/' + memberId)
            // .then(response => {
            // status = new status
            // })
            // .catch((err) => {
            //console.log(err)
            // });
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

                this.$api
                    .get(this.event.user_id)
                    .then(
                        (response) => (this.creator = response.data.fullname)
                    );
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style></style>
