<template>
    <div>
        <div class="columns is-multiline is-mobile">
            <div class="column is-half-tablet is-full-mobile">MAP</div>
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
                    Emplacement : {{ event.spot.name }} -
                    {{ event.spot.address }}
                </h3>

                <div class="column">
                    <h3 class="m-3 title is-5 has-text-centered">
                        Participants
                    </h3>
                    <div class="field has-text-centered">
                        <router-link :to="'/share-events/' + event.id" type="submit" class="button is-link is-small">
                            Ajouter participant
                        </router-link>
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
import Messages from "../../components/EventMessages.vue";
export default {
    components: {
        Participant,
        Messages
    },
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
    methods: {},
};
</script>

<style></style>
