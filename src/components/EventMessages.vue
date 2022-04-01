<template>
    <div class="card has-background-link-light">
        <div class="card-content">
            <p v-for="message in this.messages" :key="message.id">
                <span class="title is-6 has-text-link">
                    {{ message.created_at | moment("DD/MM/YYYY") }} -
                    {{ message.pseudo }} :
                </span>
                {{ message.content }}
            </p>
            <form
                @submit.prevent="send()"
                v-if="
                    this.$parent.member.status === 1 ||
                    this.$parent.member.status === 0
                "
                class="mt-4"
            >
                <div class="field">
                    <textarea
                        class="textarea is-link"
                        v-model="newMessage"
                        rows="2"
                        placeholder="Hello world"
                    ></textarea>
                </div>
                <div class="field">
                    <button type="submit" class="button is-link">
                        Envoyer message
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newMessage: "",
            messages: [],
        };
    },
    methods: {
        send() {
            // Send the message
            this.$api
                .post("messages/", {
                    content: this.newMessage,
                    member_id: this.$parent.member.id,
                    event_id: this.$route.params.id,
                    media: "{}",
                })
                .then((response) => {
                    //Adding a message to the messages list
                    let message = response.data.message;
                    if (this.$store.state.user) {
                        message.pseudo = this.$store.state.user.user_username;
                    } else {
                        message.pseudo = this.$store.state.guest.pseudo;
                    }
                    this.messages.push(message);
                    this.newMessage = "";
                    this.flashMessage.success({
                        message: "Message envoyé.",
                    });
                })
                .catch((err) =>
                    this.flashMessage.error({
                        message: "Message non envoyé.",
                    })
                );
        },
    },
    created() {
        this.$api
            .get("events/" + this.$route.params.id + "/messages")
            .then((response) => {
                this.messages = response.data.message;
                this.messages = this.messages.sort(function (a, b) {
                    return new Date(a.created_at) - new Date(b.created_at);
                });
            })
            .catch((err) =>
                this.flashMessage.error({
                    message: "Impossible d'obtenir les messages.",
                })
            );
    },
};
</script>

<style></style>
