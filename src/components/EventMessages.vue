<template>
    <div class="card has-background-link-light">
        <div class="card-content">
            <p v-for="message in this.messages" :key="message.id">
                <span class="title is-6 has-text-link">
                    {{ message.created_at }} - username!
                </span>
                -
                {{ message.content }}
            </p>
            <form @submit.prevent="send()" class="mt-4">
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
            console.log(this.message);
            this.$api
                .post("messages/", {
                    content: this.newMessage,
                    //TODO Member Id
                    member_id: "b1858803-2305-47f4-be67-1efc10a91da7",
                    event_id: this.$route.params.id,
                    media: "{}",
                })
                .then((response) => {
                    this.messages.push(response.data.message);
                    this.newMessage = "";
                });
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
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style></style>
