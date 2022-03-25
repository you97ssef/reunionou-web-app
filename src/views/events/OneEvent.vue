<template>
    <div>
        <div class="columns is-multiline is-mobile">
            <div class="column is-half-tablet is-full-mobile">
                <Map :event="event" />
            </div>
            <div class="column is-half-tablet is-full-mobile">
                <h1 class="title has-text-centered">{{ event.title }}</h1>
                <h3 class="m-3 title is-5 has-text-centered">
                    Date de l'evenement: {{ event.date }}
                </h3>

                <p class="title is-5 has-text-link">
                    Createur: {{ event.author }}
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
                    <Participant />
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
import Participant from "../../components/EventParticipants.vue";
import ShareEvent from "../../components/ShareEvent.vue";
import Messages from "../../components/EventMessages.vue";
import Map from "../../components/EventMap.vue";

export default {
    components: {
        Participant,
        Messages,
        ShareEvent,
        Map,
    },
    data() {
        return {
            status: -1,
            shareCard: false,
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
        toggleShareCard() {
            this.shareCard = !this.shareCard;
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
        // this.$api.get('events/' + this.$route.params.id)
        // .then(response => {
        // this.event = response.data
        // })
        // .catch((err) => {
        //console.log(err)
        // this.$router.push("/404");
        // });
    },
};
</script>

<style></style>
